import { Link } from 'react-router-dom'

export default function Button({ 
  children, 
  to, 
  variant = 'primary', 
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button 
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}