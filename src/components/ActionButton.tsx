import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'default' | 'black';
    disabled?: boolean;
}

export const ActionButton: React.FC<ButtonProps> = ({children, onClick, variant = 'default', disabled = false,}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                'flex items-center justify-center rounded-lg transition text-sm font-medium px-3 py-2',
                variant === 'default' && 'border border-gray-300 text-black hover:bg-gray-100',
                variant === 'black' && 'bg-black text-white hover:bg-gray-800',
                disabled && 'opacity-50 cursor-not-allowed'
            )}
        >
            {children}
        </button>
    );
};
