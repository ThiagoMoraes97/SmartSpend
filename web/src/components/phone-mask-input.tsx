import React, { forwardRef } from 'react';
import { useIMask } from 'react-imask';
import { Input } from '@/components/ui/input';

export interface PhoneMaskInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: string;
  onAccept?: (value: string, maskRef: any) => void;
  unmask?: boolean;
}

const PhoneMaskInput = forwardRef<HTMLInputElement, PhoneMaskInputProps>(
  ({ mask = "(00) 00000-0000", onAccept, unmask = false, ...props }, ref) => {
    const { ref: maskRef } = useIMask({
      mask,
      onAccept,
      unmask
    });

    return (
      <Input
        ref={(el) => {
          if (maskRef) maskRef.current = el;
          if (ref) {
            if (typeof ref === 'function') {
              ref(el);
            } else {
              ref.current = el;
            }
          }
        }}
        {...props}
      />
    );
  }
);

PhoneMaskInput.displayName = "PhoneMaskInput";

export { PhoneMaskInput };
