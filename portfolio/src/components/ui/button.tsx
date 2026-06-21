import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "btn-animate inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary-border hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm border-destructive-border hover:bg-destructive/90",
        outline:
          "border [border-color:var(--button-outline)] shadow-xs active:shadow-none hover:bg-secondary/80",
        secondary:
          "border bg-secondary text-secondary-foreground border border-secondary-border hover:bg-secondary/80",
        ghost: "border border-transparent hover:bg-secondary/70",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
  ({ className, variant, size, asChild = false, onMouseMove, onMouseLeave, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 })

    const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return
      }

      const rect = event.currentTarget.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8
      setTilt({ x: x * 0.35, y: y * 0.35 })
      onMouseMove?.(event)
    }

    const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
      setTilt({ x: 0, y: 0 })
      onMouseLeave?.(event)
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        animate={{ x: tilt.x, y: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 22, mass: 0.6 }}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
