interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({ label, className, onClick, disabled = false }: ButtonProps) {

    return (
        <>
            <button
                className={`
                    rounded-xl
                    p-2
                    shadow-2xl
                    hover:shadow-xl
                    transation-all
                    disabled:opacity-50
                    disabled:animate-pulse
                    ${className}
                `}
                onClick={onClick}
                disabled={disabled}
            >{label}</button>
        </>
    )
}