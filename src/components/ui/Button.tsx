import { type ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'accent'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
  as?: 'button'
}

interface AnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
  as: 'a'
}

type Props = ButtonProps | AnchorButtonProps

const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-sans font-medium rounded-sm
  transition-all duration-150
  focus-visible:outline-2 focus-visible:outline-offset-2
  disabled:opacity-50 disabled:pointer-events-none
  cursor-pointer select-none
`.trim()

const variantStyles: Record<Variant, string> = {
  primary: `
    px-5 py-2.5 text-sm
    bg-[var(--color-text-1)] text-[var(--color-bg)]
    hover:bg-[var(--color-text-2)]
    active:scale-[0.98]
  `,
  ghost: `
    px-5 py-2.5 text-sm
    border border-[var(--color-border)]
    text-[var(--color-text-2)]
    hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-1)]
    active:scale-[0.98]
  `,
  accent: `
    px-5 py-2.5 text-sm
    bg-[var(--color-accent)] text-white
    hover:bg-[var(--color-accent-hover)]
    active:scale-[0.98]
  `,
}

export function Button({ variant = 'primary', children, as, className = '', ...props }: Props) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (as === 'a') {
    const { as: _as, ...anchorProps } = props as AnchorButtonProps
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { as: _as, ...buttonProps } = props as ButtonProps
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

