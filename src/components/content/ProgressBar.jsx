export default function ProgressBar({ completed = 0, total = 0, showLabel = true }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="progress-bar">
      {showLabel && (
        <div className="progress-label">
          <span>Progress</span>
          <span>{completed} of {total} lessons ({percentage}%)</span>
        </div>
      )}
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={completed}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  )
}