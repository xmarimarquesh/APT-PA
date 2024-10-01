/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/matematica",
                destination: "/maths"
            },
            {
                source: "/funcao-reaproveitada",
                destination: "/general-function"
            },
            {
                source: "/poststwits",
                destination: "/post"
            }
        ]
    }
};

export default nextConfig;
