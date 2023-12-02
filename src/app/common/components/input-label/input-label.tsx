import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface InputLabelProps {
    label: string;
    id: string;
    type?: HTMLInputTypeAttribute,
    onInput: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string | number | Date;
}

export default function InputLabel({ label, type = 'text', id, onInput, value }: InputLabelProps) {
    
    return (
        <>
            <label htmlFor={id} className="text-white">{label}</label>
            <input 
                id={id} 
                type={type} 
                className="
                    bg-slate-500
                    bg-opacity-50
                    outline-none 
                    rounded-xl 
                    p-2 
                    shadow-2xl
                    shadow-slate-900
                    hover:shadow-lg
                    focus:shadow-lg
                    transition-all
                    caret-slate-300
                    selection:bg-slate-900
                    text-white
                " 
                value={value.toLocaleString()}
                onInput={onInput}
                alt={`field-${label}`}
            />
        </>
    )
}