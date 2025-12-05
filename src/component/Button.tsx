
type buttonProps = {
    children: React.ReactNode,
    className?: string,
}

const Button = ({children, className}: buttonProps) => {
  return (
    <div className={`bg-linear-to-tr from-[#FF1E1E] 100%, to-[#FF8079] 0% rounded-[10px] ${className}`}>
        {children}
    </div>
  )
}

export default Button