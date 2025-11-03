type Props = {
  variant?: "default" | "secondary",
  children: React.ReactNode
  className?: string
}

export const Text = ({ variant = "default", children, className }: Props) => {
  return (
    <p className={`${variant === "secondary" ? "text-fg/70 text-sm leading-[2.28em]" : ""} ${className}`}>
      {children}
    </p>
  )
}