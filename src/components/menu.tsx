import Link from "next/link";

interface IMenu {
    page1: string;
    page2: string;
    page3: boolean;
    page4: number;
}

// type IMenu = {

// }

export const Menu = ({page1, page2, page3, page4} : IMenu) => {
    return(
        <nav className="p-3 bg-pink-700 text-white font-robFont text-large flex flex-row justify-center align-center gap-5">
          <p className="rounded-sm bg-pink-300 w-36">{page1}</p>
          <p className="rounded-sm bg-pink-300 w-36">{page2}</p>
          <p className="rounded-sm bg-pink-300 w-36">"{page3}"</p>
          <p className="rounded-sm bg-pink-300 w-36">{page4}</p>
        </nav>
    )
}