import { useState, useCallback } from 'react'

const STORAGE_KEY = 'forcelearn_progress'

// Initialize progress from localStorage
const getStoredProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return {
        completedLessons: parsed.completedLessons || [],
        lastVisited: parsed.lastVisited || null,
        pathsProgress: parsed.pathsProgress || {}
      }
    }
    return { completedLessons: [], lastVisited: null, pathsProgress: {} }
  } catch (e) {
    console.error('Error loading progress:', e)
    return { completedLessons: [], lastVisited: null, pathsProgress: {} }
  }
}

// Save progress to localStorage
const saveProgressToStorage = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (e) {
    console.error('Error saving progress:', e)
  }
}

export default function useProgress() {
  const [progress, setProgress] = useState(getStoredProgress)

  // Mark a lesson as completed
  const completeLesson = useCallback((lessonSlug, pathId) => {
    setProgress(prev => {
      const pathProgress = prev.pathsProgress?.[pathId] || {}
      const newProgress = {
        ...prev,
        completedLessons: prev.completedLessons.includes(lessonSlug)
          ? prev.completedLessons
          : [...prev.completedLessons, lessonSlug],
        lastVisited: lessonSlug,
        pathsProgress: {
          ...prev.pathsProgress,
          [pathId]: {
            ...pathProgress,
            completed: pathProgress.completed 
              ? [...new Set([...pathProgress.completed, lessonSlug])]
              : [lessonSlug]
          }
        }
      }
      saveProgressToStorage(newProgress)
      return newProgress
    })
  }, [])

  // Mark a lesson as incomplete
  const uncompleteLesson = useCallback((lessonSlug, pathId) => {
    setProgress(prev => {
      const pathProgress = prev.pathsProgress?.[pathId] || {}
      const newProgress = {
        ...prev,
        completedLessons: prev.completedLessons.filter(slug => slug !== lessonSlug),
        pathsProgress: {
          ...prev.pathsProgress,
          [pathId]: {
            ...pathProgress,
            completed: (pathProgress.completed || []).filter(slug => slug !== lessonSlug)
          }
        }
      }
      saveProgressToStorage(newProgress)
      return newProgress
    })
  }, [])

  // Toggle lesson completion
  const toggleLesson = useCallback((lessonSlug, pathId) => {
    setProgress(prev => {
      const isCompleted = prev.completedLessons.includes(lessonSlug)
      const pathProgress = prev.pathsProgress?.[pathId] || {}
      const newProgress = {
        ...prev,
        completedLessons: isCompleted
          ? prev.completedLessons.filter(slug => slug !== lessonSlug)
          : [...prev.completedLessons, lessonSlug],
        pathsProgress: {
          ...prev.pathsProgress,
          [pathId]: {
            ...pathProgress,
            completed: isCompleted
              ? (pathProgress.completed || []).filter(slug => slug !== lessonSlug)
              : [...new Set([...(pathProgress.completed || []), lessonSlug])]
          }
        }
      }
      saveProgressToStorage(newProgress)
      return newProgress
    })
  }, [])

  // Check if a lesson is completed
  const isLessonCompleted = useCallback((lessonSlug) => {
    return progress.completedLessons?.includes(lessonSlug) || false
  }, [progress.completedLessons])

  // Get progress for a specific path
  const getPathProgress = useCallback((pathId, totalLessons) => {
    const pathData = progress.pathsProgress?.[pathId]
    const completed = pathData?.completed || []
    return {
      completed: completed.length,
      total: totalLessons,
      percentage: totalLessons > 0 ? Math.round((completed.length / totalLessons) * 100) : 0
    }
  }, [progress.pathsProgress])

  // Reset all progress
  const resetProgress = useCallback(() => {
    const newProgress = { completedLessons: [], lastVisited: null, pathsProgress: {} }
    saveProgressToStorage(newProgress)
    setProgress(newProgress)
  }, [])

  // Set last visited lesson
  const setLastVisited = useCallback((lessonSlug) => {
    setProgress(prev => {
      const newProgress = { ...prev, lastVisited: lessonSlug }
      saveProgressToStorage(newProgress)
      return newProgress
    })
  }, [])

  return {
    progress,
    completeLesson,
    uncompleteLesson,
    toggleLesson,
    isLessonCompleted,
    getPathProgress,
    resetProgress,
    setLastVisited
  }
}