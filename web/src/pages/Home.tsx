import { useEffect, useState } from "react";
import { BoxCard } from "../components/BoxCard";
import { Button } from "../components/Button";
import { GameCard } from "../components/GameCard";
import { Header } from "../components/Header";
import * as Dialog from "@radix-ui/react-dialog"
import { GameController } from "phosphor-react";
import { InputForm } from "../components/InputForm";
import { DialogPortal } from "../components/DialogPortal";

export interface GameInterface {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
      ads: number;
    }
  }  
  

export function Home() {
    const [games, setGames] = useState<GameInterface[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(data => {
            setGames(data);
        })
    }, [])


    return (
       <>
            <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
                <Header 
                    headerTitle="Seu duo está aqui."
                />

                    <div className='grid grid-cols-6 gap-6 mt-16'>
                        {
                            games.map(game => (
                            <GameCard
                                key={game.id}
                                bannerUrl={game.bannerUrl}
                                title={game.title}
                                ads={game._count.ads}
                            />
                        ))
                        }
                    </div>
                    
                    <Dialog.Root>
                        <BoxCard 
                            boxTitle="Não encontrou seu duo?"
                            boxSubTitle="Punlique um anuncio para encontrar novos players!"
                            buttonTitle="Criar Anuncio"
                        />
                        <DialogPortal />
                    </Dialog.Root>
            </div>
       </> 
    )
}