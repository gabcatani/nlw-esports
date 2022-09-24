import { InputHTMLAttributes } from "react";

interface InputrProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputForm (props: InputrProps) {


    return (
        <input 
            {...props}
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
        />
    )
}