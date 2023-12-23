import React from 'react';

interface ButtonProps {
    children: string;
}

declare const Button: ({ children }: ButtonProps) => React.JSX.Element;

export { Button };
