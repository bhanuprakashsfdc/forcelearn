export default function Badge({ 
  children, 
  variant = 'default',
  className = ''
}) {
  const classes = `badge badge-${variant} ${className}`
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
}