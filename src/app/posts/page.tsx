

import { Card } from "../../components/card"

const Post: React.FC = () => {

    const batata: { img: number; data: string; titulo: string; descricao: string; read: string; comments: string; views: string }[] = [
        {
            img: 1,
            data: "3 days ago",
            titulo: "Post One",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            read: "4ᵐ",
            comments: "32",
            views: "5123"
        },
        {
            img: 2,
            data: "5 days ago",
            titulo: "Post Two",
            descricao: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
            read: "7ᵐ",
            comments: "21",
            views: "7152"
        },
        {
            img: 3,
            data: "1 days ago",
            titulo: "Post Three",
            descricao: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            read: "5ᵐ",
            comments: "15",
            views: "50"
        }
    ];
    
    
    return (
        <>
            <div className="flex flex-row w-full justify-center flex-wrap wrap items-center min-h-screen h-auto">
                {batata.map((post, index) => (
                    <Card key={index} img={post.img} data={post.data} titulo={post.titulo} descricao={post.descricao} read={post.read} comments={post.comments} views={post.views}/>
                ))}
            </div>
        </>
    )
}

export default Post