import { Link } from "react-router-dom"
import { useFilmList } from "../../hooks/useFilmList"

export const Home = () => {
    const {data, isLoading, error} = useFilmList(10)

    if(isLoading) {
        return <p>Carregando...</p>
    }

    if(error) {
        return <p>Ocorreu um erro: {error.message}</p>
    }

    return (
        <main>
            <ul>
                {data?.map((film) => (
                    <Link to={`/film/${film.id}`} key={film.id}>
                    <li key={film.id}>
                        <h3>Título: {film.title}</h3>
                        <p>Descrição: {film.description}</p>
                    </li>
                    </Link>
                ))}
            </ul>
        </main>
    )
}