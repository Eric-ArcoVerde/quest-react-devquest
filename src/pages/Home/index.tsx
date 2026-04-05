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
        <main className="flex">
            <ul className="m-5">
                {data?.map((film) => (
                    <Link to={`/film/${film.id}`} key={film.id}>
                    <li key={film.id} className="border rounded-2xl p-5 mb-5 bg-gray-700">
                        <h3 className="text-2xl">Título: {film.title}</h3>
                        <p>Descrição: {film.description}</p>
                    </li>
                    </Link>
                ))}
            </ul>
        </main>
    )
}