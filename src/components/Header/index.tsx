import { Link } from "react-router-dom";

export const Header =() => {
    return(
        <>
            <header>
                <Link to="/">Home</Link>
                <h1>Filmes do Studio Ghibli</h1>
            </header>
        </>
    )
}