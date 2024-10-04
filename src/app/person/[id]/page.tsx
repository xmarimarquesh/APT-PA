import exp from "constants";
import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string;
    status: string;
    species: string;
    image: string;
    name: string;
}

interface IDataStaticIndex {
    results: IData[]
}

const Person = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data : IData = await res.json();
    
    return (
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <p>{data.status}</p>
            <p>{data.species}</p>
            <Image className="h-auto w-[500px]" src={data.image} alt="sla" width={100} height={100} />
        </div>
    )
}

export default Person;

export async function generateStaticParams() {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data : IDataStaticIndex = await res.json();

    return data.results.map((item) => item.id.toString());
}
