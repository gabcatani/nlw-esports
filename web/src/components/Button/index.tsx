type ButtonProps = {
    title: string
}

export function Button({title}: ButtonProps) {

    return (
        <button
            className="w-8 h-8 rounded bg-zinc-900"
        >
            {title}
        </button>
    )
}