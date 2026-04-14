export default function Card({ 
  children, 
  className = '',
  onClick,
  hoverable = false
}) {
  const classes = `card ${hoverable ? 'card-hoverable' : ''} ${className}`
  
  return (
    <div 
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  )
}