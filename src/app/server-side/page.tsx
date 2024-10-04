import { Suspense } from "react";

import Link from "next/link";

type IData = {
    results: {
        name: string;
        id: string;
    }[]
}

const ServerSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data : IData = await res.json()
    console.log(data);

    return (
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <h1 className='font-bold text-[3em] text-pink-900'>Server Side Rendering</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data.results.map((item) => {
                    return(
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <Link href={`/person/${item.id}`}>ABRIR</Link>
                        </div>
                    )
                })}
            </Suspense>
        </div>
    )
}

export default ServerSide;