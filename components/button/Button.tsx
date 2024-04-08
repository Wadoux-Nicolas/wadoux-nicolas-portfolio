'use client';

import styles from "./Button.module.scss";

export default function Button(
    {
        children,
        type = 'primary',
        shape = 'rounded',
        component: Component = 'button',
        componentProps,
        style,
        disabled = false,
        onClick,
    }: {
        children?: React.ReactNode;
        type?: ButtonType;
        shape?: ButtonShape;
        component?: ButtonComponent;
        componentProps?: any;
        style?: React.CSSProperties;
        disabled?: boolean;
        onClick?: () => void;
    }
) {

    return (
        <Component
            className={`${styles.button} ${styles[type]} ${styles[shape]}`}
            disabled={disabled}
            onClick={onClick}
            style={style}
            {...componentProps}
        >
            {children}
        </Component>
    );
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export type ButtonShape = 'rounded' | 'pill' | 'circle' | 'link';
export type ButtonComponent = 'button' | 'a';