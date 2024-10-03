"use client"
import { useState } from 'react'

const GeneralFunction: React.FC = () => {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    
    const [respSoma, setRespSoma] = useState<number | undefined>()
    const [respSub, setRespSub] = useState<number | undefined>()
    const [respMult, setRespMult] = useState<number | undefined>()
    const [respDiv, setRespDiv] = useState<number | undefined>()

    const erro = "Insira um número válido"

    const handleAll = ({a,b}:  {a: string, b: string}) => {
        const n1 = parseFloat(a)
        const n2 = parseFloat(b)

        if(!isNaN(n1) && !isNaN(n2)){
            setRespDiv(n2 !== 0? n1 / n2 : undefined)
            setRespMult(n1 * n2)
            setRespSoma(n1 + n2)
            setRespSub(n1 - n2)
        } else{
            setRespDiv(undefined)
            setRespMult(undefined)
            setRespSoma(undefined)
            setRespSub(undefined)
        }
    }

    return (
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <h1 className='font-bold text-[3em] text-pink-900'>Função Reaproveitada</h1>
            <div className='bg-pink-900 p-6 m-3 rounded-md shadow-2xl'>
            
            <div>
                <input type="text" placeholder="0" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="0" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
            </div>
            <div className='flex justify-center'>
                <button className='bg-white text-pink-900 font-extrabold m-2 text-[1.2em] rounded-md w-8 hover:scale-110 transition ease-in-out' onClick={() => handleAll({a: numero1, b: numero2})}>=</button>
            </div>
            <div>
                <div className='bg-white flex flex-col items-center text-[1.2em] font-bold rounded-md m-2'>
                    <h2>Soma</h2>
                    <p className='text-[1.5em]'>{!isNaN(respSoma ?? NaN) ? respSoma : erro}</p>
                </div>
                <div className='bg-white flex flex-col items-center text-[1.2em] font-bold rounded-md m-2'>
                    <h2>Subtração</h2>
                    <p className='text-[1.5em]'>{!isNaN(respSub ?? NaN) ? respSub : erro}</p>
                </div>
                <div className='bg-white flex flex-col items-center text-[1.2em] font-bold rounded-md m-2'>
                    <h2>Multiplicação</h2>
                    <p className='text-[1.5em]'>{!isNaN(respMult ?? NaN) ? respMult : erro}</p>
                </div>
                <div className='bg-white flex flex-col items-center text-[1.2em] font-bold rounded-md m-2'>
                    <h2>Divisão</h2>
                    <p className='text-[1.5em]'>{!isNaN(respDiv ?? NaN) ? respDiv?.toFixed(1) : erro}</p>
                </div>
            </div>
                
            </div>
        </div>
    )
}

export default GeneralFunction;