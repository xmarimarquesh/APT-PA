
export const Footer = ({email, data}: {email: string; data: string}) => {
    return(
        <footer>
            <p>{email}</p>
            <p>{data}</p>
        </footer>
    )
}