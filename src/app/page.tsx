import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste Next.js",
  description: "Aprendizagem técnica da bosch",
};

export default function Home() {

  const style = {
    login: "text-white bg-pink-700 p-10 flex flex-col w-[500px] align-center justify-center shadow-2xl",
    input: "m-3 flex align-center justify-center flex-col",
    botao: "rounded-md p-2 m-3 bg-pink-300"
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <form className={style.login}>
        <h1 className="text-large">Login</h1>
        <label className={style.input}>Email<input placeholder="Digite seu email aqui..." type="email" className="rounded-md p-2" /></label>
        <label className={style.input}>Senha<input placeholder="Digite sua senha aqui..." type="password" className="rounded-md p-2" /></label>
        <button className={style.botao}>Entrar</button>
      </form>
    </div>
  );
}
