import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface MenuProps {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
}

export const Menu: React.FC<MenuProps> = ({op1, op2, op3, op4}) => {
    return(
        <nav className="text-branco bold bg-pink-800 gap-3 p-3 font-robFont text-medium flex flex-row justify-center align-center gap-8">
          <Link className="bg-white text-pink-900 font-semibold p-2 w-[20%] flex justify-center rounded-lg hover:scale-110 transition ease-in-out" href={ROUTES.home}>{op1}</Link>
          <Link className="bg-white text-pink-900 font-semibold p-2 w-[20%] flex justify-center rounded-lg hover:scale-110 transition ease-in-out" href={ROUTES.maths}>{op2}</Link>
          <Link className="bg-white text-pink-900 font-semibold p-2 w-[20%] flex justify-center rounded-lg hover:scale-110 transition ease-in-out" href={ROUTES.generalFunction}>{op3}</Link>
          <Link className="bg-white text-pink-900 font-semibold p-2 w-[20%] flex justify-center rounded-lg hover:scale-110 transition ease-in-out" href={ROUTES.post}>{op4}</Link>
        </nav>
    )
}