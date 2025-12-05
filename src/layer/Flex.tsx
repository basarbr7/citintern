import React from "react"

type headerProps = {
    className?: string,
    children: React.ReactNode
}

const Flex = ({className, children}: headerProps) => {
  return (
    <div className={`flex ${className}`}>
        {children}
    </div>
  )
}

export default Flex