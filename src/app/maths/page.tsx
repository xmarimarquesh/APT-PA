'use client'

import React, { useState } from "react"

const Maths: React.FC = () => {

    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>(0)
    const [respSubtracao, setRespSubtracao] = useState<number | undefined>(0)
    const [respMultiplicacao, setRespMultiplicacao] = useState<number | undefined>(0)
    const [respDivisao, setRespDivisao] = useState<number | undefined>(0)
    const msgError = "Digite um número válido"

    console.log(numero1, numero2)
    console.log(typeof numero1, typeof numero2)

    const handleSoma = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!(isNaN(n1)) && !(isNaN(n2))) {
            setRespSoma(n1 + n2)
        }
        else {
            setRespSoma(undefined) 
        }
    }

    const handleSubtracao = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!(isNaN(n1)) && !(isNaN(n2))) {
            setRespSubtracao(n1 - n2)
        }
        else {
            setRespSubtracao(undefined) 
        }
    }


    const handleMultiplicacao = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!(isNaN(n1)) && !(isNaN(n2))) {
            setRespMultiplicacao(n1 * n2)
        }
        else {
            setRespMultiplicacao(undefined) 
        }
    }


    const handleDivisao = () => {
        const n1 = parseFloat(numero1)
        const n2 = parseFloat(numero2)

        if(!(isNaN(n1)) && !(isNaN(n2)) && (n2 != 0)) {
            setRespDivisao(n1 / n2)
        }
        else {
            setRespDivisao(undefined) 
        }
    }


    return (
        <div className="flex flex-col mt-10 items-center w-full h-screen text-white">
            <h1 className="font-bold text-[3em] text-pink-900">Use client com controle de estado</h1>
            <div className="bg-pink-800 flex flex-col mt-10 items-center w-[30%] p-10 shadow-2xl">
            <div className="w-[90%] flex flex-row justify-center m-2">
                <label className="" htmlFor="n1">Número 1</label>
                <input className="w-[50%] p-1 ml-3 rounded-md text-black" placeholder="Digite aqui" id="n1" type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}></input>
            </div>
            <div className="w-[90%] flex flex-row justify-center m-2">
                <label htmlFor="n2">Número 2</label>
                <input className="w-[50%] p-1 ml-3 rounded-md text-black" placeholder="Digite aqui"id="n2" type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}></input>
            </div>
            <div className="w-full flex justify-center">
                <button className="m-2 p-2 rounded-md bg-white text-pink-950 font-bold hover:scale-110 transition ease-in-out" onClick={handleSoma}>SOMAR</button>
                <button className="m-2 p-2 rounded-md bg-white text-pink-950 font-bold hover:scale-110 transition ease-in-out" onClick={handleSubtracao}>SUBTRAIR</button>
                <button className="m-2 p-2 rounded-md bg-white text-pink-950 font-bold hover:scale-110 transition ease-in-out" onClick={handleMultiplicacao}>MULTIPLICAR</button>
                <button className="m-2 p-2 rounded-md bg-white text-pink-950 font-bold hover:scale-110 transition ease-in-out" onClick={handleDivisao}>DIVIDIR</button>
            </div>
            <table className="table-fixed border-collapse border-2 border-white w-full">
                <thead>
                    <th className="m-2 p-2 border-2 border-white">Soma</th>
                    <th className="m-2 p-2 border-2 border-white">Subtração</th>
                    <th className="m-2 p-2 border-2 border-white">Multiplicação</th>
                    <th className="m-2 p-2 border-2 border-white">Divisão</th>
                </thead>
                <tr>
                    <td className="m-2 p-2 border-2 border-white">{!isNaN(respSoma ?? NaN) ? respSoma : msgError}</td>
                    <td className="m-2 p-2 border-2 border-white">{!isNaN(respSubtracao ?? NaN) ? respSubtracao : msgError}</td>
                    <td className="m-2 p-2 border-2 border-white">{!isNaN(respMultiplicacao ?? NaN) ? respMultiplicacao : msgError}</td>
                    <td className="m-2 p-2 border-2 border-white">{!isNaN(respDivisao ?? NaN) ? respDivisao : msgError}</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Maths