import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  category?: "header"; // Define the categories you need
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, category, ...props }, ref) => {
    // Define conditional styling based on the `category` prop

    return (
      <input
        type={type}
        className={cn(
          "flex h-[2.2vw] w-[2.2vw] rounded-md border shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 text-center",
          category === "header" ? "text-sm" : "text-4xl", // Apply category-specific styles
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
