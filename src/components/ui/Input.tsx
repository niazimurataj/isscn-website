import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[#2F3E4E] mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-3
            bg-white border rounded-lg
            text-[#2F3E4E] placeholder:text-[#9AA7B2]
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-[#5B6B7A] focus:border-transparent
            ${error ? "border-[#6b4a4a]" : "border-[#9AA7B2]/50 hover:border-[#5B6B7A]"}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[#6b4a4a]">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-[#5B6B7A]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = "", id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[#2F3E4E] mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full px-4 py-3
            bg-white border rounded-lg
            text-[#2F3E4E] placeholder:text-[#9AA7B2]
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-[#5B6B7A] focus:border-transparent
            resize-y min-h-[120px]
            ${error ? "border-[#6b4a4a]" : "border-[#9AA7B2]/50 hover:border-[#5B6B7A]"}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[#6b4a4a]">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-[#5B6B7A]">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
