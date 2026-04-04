import { Link } from "react-router-dom";

export const Header =() => {
    return(
        <>
            <header className="flex gap-5">
                <Link to="/" className="bg-blue-500">Home</Link>
                <h1 >Filmes do Studio Ghibli</h1>
            </header>
        </>
    )
}