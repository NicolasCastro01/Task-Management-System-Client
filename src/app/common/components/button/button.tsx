interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
}

export default function Button({ label, className, onClick }: ButtonProps) {

    return (
        <>
            <button
                className={`
                bg-slate-900
                    rounded-xl
                    p-2
                    shadow-2xl
                    hover:shadow-xl
                    transation-all
                    ${className}
                `}
                onClick={onClick}
            >{label}</button>
        </>
    )
}