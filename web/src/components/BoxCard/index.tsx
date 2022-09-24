import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from "@radix-ui/react-dialog"

type BoxCardProps = {
    boxTitle: string
    boxSubTitle: string
    buttonTitle: string
}

export function BoxCard ({boxTitle, boxSubTitle, buttonTitle}: BoxCardProps ){
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
                <div>
                    <strong 
                        className="text-2lx text-white font-black"
                        >
                        {boxTitle}
                    </strong>
                    <span
                        className="text-zinc-400 block"
                        >
                        {boxSubTitle}
                    </span>
                </div>
                <Dialog.DialogTrigger className="py-3 px-4 bg-violet-500 text-white rounded-lg hover:bg-violet-800 flex items-center gap-3">
                    <MagnifyingGlassPlus size={24}/>
                    {buttonTitle}
                </Dialog.DialogTrigger>
            </div>        
        </div>
    )
}