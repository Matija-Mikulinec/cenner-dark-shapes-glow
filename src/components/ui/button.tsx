import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "liquid-gradient text-primary-foreground hover:scale-105 glow-effect shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline:
          "glass-button text-foreground hover:scale-105 hover:shadow-primary/20",
        secondary:
          "glass-button text-secondary-foreground hover:scale-105",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground hover:scale-105 backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "glass-button text-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/20",
        liquid: "liquid-gradient text-primary-foreground hover:scale-105 animate-liquid glow-effect",
      },
      size: {
        default: "h-11 px-8 py-2 min-w-[120px]",
        sm: "h-9 px-6 min-w-[100px]",
        lg: "h-12 px-10 min-w-[140px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
