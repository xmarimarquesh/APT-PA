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
        card: "w-96 h-auto bg-white m-10 rounded-3xl relative",
        imagem: "rounded-t-3xl w-100 h-60 cover",
        body: "p-2 flex flex-center flex-col items-center",
        h4_verde: "text-green-700 font-bold",
        h4_rosa: "text-pink-700 font-bold",
        h4_laranja: "text-orange-700 font-bold",
        verde: "bg-green-400 flex flex-row w-full rounded-b-3xl p-2 justify-around absolute bottom-0",
        rosa: "bg-pink-400 flex flex-row w-full rounded-b-3xl p-2 justify-around absolute bottom-0",
        laranja: "bg-orange-400 flex flex-row w-full rounded-b-3xl p-2 justify-around absolute bottom-0",
        view_verde: "",
        view_rosa: "",
        view_laranja: "",
    }

    return(
        <div className={style.card}>
            <Image src={img === 1 ? img1 : img === 2 ? img2 : img3 } alt="imagem" className={style.imagem}/>
            <div className={style.body}>
                <h4 className={img === 1 ? style.h4_verde : img === 2 ? style.h4_rosa : style.h4_laranja }>{data}</h4>
                <h2 className="text-[2em]">{titulo}</h2>
                <p className="flex flex-center text-gray-500 text-center mt-2 mb-16 p-4">{descricao}</p>
            </div>
                <div className={img === 1 ? style.verde : img === 2 ? style.rosa : style.laranja }>
                    <div className={img === 1 ? style.view_verde : img === 2 ? style.view_rosa : style.view_laranja }>
                        <h2>{read}</h2>
                        <h4>Read</h4>
                    </div>
                    <div>
                        <h2>{views}</h2>
                        <h4>Views</h4>
                    </div>
                    <div>
                        <h2>{comments}</h2>
                        <h4>Read</h4>
                    </div>
                </div>
        </div>
    )
}