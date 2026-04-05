import { Link } from "react-router-dom";

export const Header =() => {
    return(
        <>
            <header className="flex gap-5 p-5 items-center">
                <Link to="/">
                    <img src="/images/studio-ghibli.png" alt="Logo do Studio Ghibli" className="h-20 rounded-2xl"/>
                </Link>
                <h1 className="text-3xl">Filmes do Studio Ghibli</h1>
            </header>
        </>
    )
}