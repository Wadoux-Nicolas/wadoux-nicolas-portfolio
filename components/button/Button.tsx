'use client';

import styles from "./Button.module.scss";

export default function Button(
    {
        children,
        type = 'primary',
        shape = 'rounded',
        disabled = false,
        onClick,
    }: {
        children?: React.ReactNode;
        type?: ButtonType;
        shape?: ButtonShape;
        disabled?: boolean;
        onClick?: () => void;
    }
) {

    return (
        <button
            className={`${styles.button} ${styles[type]} ${styles[shape]}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export type ButtonShape = 'rounded' | 'pill' | 'circle' | 'link';