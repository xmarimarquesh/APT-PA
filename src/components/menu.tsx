import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface MenuProps {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
    op5: string;
    op6: string;
}

export const Menu: React.FC<MenuProps> = ({op1, op2, op3, op4, op5, op6}) => {
    const style = {
        botao: "bg-white text-pink-900 font-semibold p-2 w-[12%] flex justify-center rounded-lg hover:scale-110 transition ease-in-out",
    }
    return(
        <nav className="text-branco bold bg-pink-800 gap-3 p-3 font-robFont text-medium flex flex-row justify-center align-center gap-8">
          <Link className={style.botao} href={ROUTES.home}>{op1}</Link>
          <Link className={style.botao} href={ROUTES.maths}>{op2}</Link>
          <Link className={style.botao} href={ROUTES.generalFunction}>{op3}</Link>
          <Link className={style.botao} href={ROUTES.post}>{op4}</Link>
          <Link className={style.botao} href={ROUTES.fetchNativo}>{op5}</Link>
          <Link className={style.botao} href={ROUTES.AxiosPage}>{op6}</Link>
        </nav>
    )
}