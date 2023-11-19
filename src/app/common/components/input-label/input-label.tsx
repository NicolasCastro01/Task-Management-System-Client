import { HTMLInputTypeAttribute, useState } from "react";

interface InputLabelProps {
    label: string;
    id: string;
    type: HTMLInputTypeAttribute
}

export default function InputLabel({ label, type, id }: InputLabelProps) {
    const [value, setValue] = useState<string | number>('');
    
    const handleValue = (value: string | number) => {
        setValue(value);
    }
    
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                type={type} 
                className="
                    bg-transparent
                    outline-none 
                    rounded-xl 
                    p-2 
                    shadow-2xl
                    hover:shadow-md
                    focus:shadow-md
                    transition-all
                    caret-slate-300
                    selection:bg-slate-900
                " 
                onChange={(event) => handleValue(event.target.value)}
                value={value}
            />
        </>
    )
}