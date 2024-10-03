import Link from "next/link";

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.webp"

import Image from "next/image";

export const Card = ({img, data, titulo, descricao, read, views, comments}: {
        img: number,
        data: string,
        titulo: string,
        descricao: string,
        read: string,
        views: string,
        comments: string
    }) => {

    const style = {
        card: "w-96 h-auto bg-white m-10 rounded-3xl relative shadow-black shadow-xl hover:shadow-2xl hover:scale-125 transition ease-in-out",
        imagem: "rounded-t-3xl w-100 h-60 cover",
        body: "p-2 flex flex-center flex-col items-center",
        h4_verde: "text-green-700 font-bold",
        h4_rosa: "text-pink-700 font-bold",
        h4_laranja: "text-orange-700 font-bold",
        verde: "bg-green-800 flex flex-row w-full rounded-b-3xl justify-between absolute bottom-0 p-[2px]",
        rosa: "bg-pink-800 flex flex-row w-full rounded-b-3xl justify-between absolute bottom-0 p-[2px]",
        laranja: "bg-orange-800 flex flex-row w-full rounded-b-3xl justify-between absolute bottom-0 p-[2px]",
    }

    return(
        <div className={style.card}>
            <Image src={img === 1 ? img1 : img === 2 ? img2 : img3 } alt="imagem" className={style.imagem}/>
            <div className={style.body}>
                <h4 className={img === 1 ? style.h4_verde : img === 2 ? style.h4_rosa : style.h4_laranja }>{data}</h4>
                <h2 className="text-[2em] font-bold">{titulo}</h2>
                <p className="flex flex-center text-gray-400 text-center mt-2 mb-24 p-4">{descricao}</p>
            </div>
                <div className={img === 1 ? style.verde : img === 2 ? style.rosa : style.laranja }>
                    <div className={img === 1 ? "bg-green-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3 rounded-bl-3xl" : img === 2 ? "bg-pink-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3 rounded-bl-3xl" : "bg-orange-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3 rounded-bl-3xl" }>
                        <h2 className="text-[1.7em] font-bold">{read}</h2>
                        <h4 className="text-[1em]">READ</h4>
                    </div>
                    <div className={img === 1 ? "bg-green-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3" : img === 2 ? "bg-pink-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3" : "bg-orange-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3 " }>
                        <h2 className="text-[1.7em] font-bold">{views}</h2>
                        <h4 className="text-[1em]">VIEWS</h4>
                    </div>
                    <div className={img === 1 ? "bg-green-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3 rounded-br-3xl" : img === 2 ? "bg-pink-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3 rounded-br-3xl" : "bg-orange-700 w-[33%] h-auto p-2 flex items-center flex-col text-white pt-3 pb-3 rounded-br-3xl" }>
                        <h2 className="text-[1.7em] font-bold">{comments}</h2>
                        <h4 className="text-[1em]">COMMENTS</h4>
                    </div>
                </div>
        </div>
    )
}