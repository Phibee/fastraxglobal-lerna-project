import type React from "react";
import styled from "styled-components";
import clx from "classnames"
import Waves, {ElementSelector} from 'node-waves';
import {useEffect, useRef} from "react";

const StyledButton = styled.button`
`;

export const ButtonSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type TButtonSize = typeof ButtonSizes[number];

export const ButtonVariants = ['primary', 'secondary', 'info', 'danger', 'success', 'warning'] as const;
export type TButtonVariants = typeof ButtonVariants[number];

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    disabled?: boolean;
    outline?: boolean;
    rounded?: boolean;
    ripple?: boolean;
    size?: TButtonSize
    shadow?: boolean;
    variant?: TButtonVariants;
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
    shadow = false,
    ripple = false,
    outline = false,
    disabled= false,
    variant = "primary",
    ...props
}
) => {
    const btnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (ripple) {
            Waves.init();
            Waves.attach(btnRef.current as ElementSelector, ['waves-light']);
        }
        else {
            btnRef.current?.classList.remove("waves-effect", "waves-light");
        }
    }, [ripple, btnRef, props]);
    
    return (
        <StyledButton
            {...props}
            ref={btnRef}
            aria-label="button"
            role="button"
            type="button"
            disabled={disabled}
            className={clx(
                'btn',
                variant ? `btn-${variant}` : '',
                size ? `btn-${size}` : '',
                shadow ? `shadow${size ? '-' + size : ''}` : '', 
                className, {
                'rounded': rounded, 
                'inverted': outline,
            })}
        >
            {children}
        </StyledButton>
    );
}

export default Button;