"use client"

import { useEffect, useState } from "react";

import Image from "next/image";
import { api } from "@/constants/api";

interface IData {
    name: string,
    image: string,
    id: string,
}

const FetchPage = () => {
    const [characters, setcharacters] = useState<IData[]>([]);

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json();
            setcharacters(data.results);
            console.log(data);
        }
        load();
    }, [])
    

    return(
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <h1 className='font-bold text-[3em] text-pink-900'>Fetch Nativo para requisições get</h1>
            <div className="flex wrap flex-wrap mt-10 items-center w-full">
                {characters.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-col mt-10 items-center">
                            <Image src={item.image} alt="sla" width={200} height={200}/>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FetchPage;