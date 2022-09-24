import logoImg from '../../assets/logo-nlw.svg';

type TitleProps = {
    headerTitle: string;
}

export function Header({headerTitle}: TitleProps) {
    return (
        <>
            <img src={logoImg}/>

            <h1 className='text-6xl text-white font-black mt-20'>
                <span className='text-transparent bg-nlw-gradient bg-clip-text'>
                {headerTitle}
                </span>
            </h1>
        </>
    )
}