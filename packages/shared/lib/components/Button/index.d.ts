import type React from "react";
export declare const ButtonSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export declare type TButtonSize = keyof typeof ButtonSizes;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: TButtonSize;
    elevation?: boolean;
    rounded?: boolean;
}
/**
 * Button component
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=index.d.ts.map