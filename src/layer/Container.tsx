
type containerProps= {
    className?: string,
    children: React.ReactNode
}

const Container = ({className, children}: containerProps) => {
  return (
    <div className={`max-w-[1140px] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container