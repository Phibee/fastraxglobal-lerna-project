import type React from "react";
import styled from "styled-components";
import clx from "classnames"

const StyledButton = styled.button`
`;

export const ButtonSizes = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
  };

export type TButtonSize = keyof typeof ButtonSizes

export interface ButtonProps
      extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      children: React.ReactNode;
      size?: TButtonSize
      elevation?: boolean;
      rounded?: boolean;
}

/**
 * Button component
 */


export const Button: React.FC<ButtonProps> = (
{
    children,
    className,
    size,
    rounded = true,
    elevation = false,
    ...props
}
) => {
    return (
        <StyledButton
            type="button"
            className={clx(
                'btn', 
                size ? `btn-${size}` : '', 
                elevation ? `shadow${size ? '-' + size : ''}` : '', 
                className, {
                'rounded': rounded
            })}
            {...props}
        >
            {children}
        </StyledButton>
    );
}

export default Button;