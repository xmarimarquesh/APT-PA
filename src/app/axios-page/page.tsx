"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

interface IData {
    name: string, 
    gender: string,
    status: string,
    species: string,
    image: string
}

const axiosPage = () => {
    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possivel buscar os dados");

    const [page, setpage] = useState<string>("")

    useEffect(() => {
        api.get(`/character?page=${page}`).then((res) => {
            setErro(false);
            setData(res.data.results);
        }).catch((error) =>{
            if(error.response.status === 404){
                setErrorMessage("Página não encontrada! ");
            }
            setErro(true);
        })
    }, [page])

    return(
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <h1 className='font-bold text-[3em] text-pink-900'>Página com useEffect e Axios</h1>
            <input type="text" value={page} placeholder="Digite aqui" onChange={(e) => setpage(e.target.value)} />
            {erro && <h5>{errorMessage}</h5>}
            <div className="flex wrap flex-wrap mt-10 items-center w-full">
                {data.map((item, i) => {
                    return(
                        <div key={i}>
                            <h2>{item.name}</h2>
                            <Image src={item.image} width={200} height={200} alt="sla"/>
                            <p>{item.gender}</p>
                            <p>{item.species}</p>
                            <p>{item.status}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default axiosPage;