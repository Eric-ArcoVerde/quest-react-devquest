import { useParams } from "react-router-dom"
import { useFilmList } from "../../hooks/useFilmList"

export const FilmDetail = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useFilmList()

    if (isLoading) {
        return <p>Carregando...</p>
    }

    if (error) {
        return <p>Ocorreu um erro: {error.message}</p>
    }

    const filmDetail = data?.find(film => film.id === id)

    return (
        <>
            <main className="flex flex-col gap-5 mx-5 border rounded-2xl p-5 bg-gray-700">
                <h2 className="text-3xl">Detalhes do filme: {filmDetail?.title}</h2>

                <img src={filmDetail?.movie_banner} alt="banner do filme" className="max-w-100 mx-auto"/>

                <div className="flex flex-col gap-2">
                    <p>Descrição: {filmDetail?.description}</p>
                    <p>Diretor: {filmDetail?.director}</p>
                    <p>Produtor: {filmDetail?.producer}</p>
                    <p>Ano de Lançamento: {filmDetail?.release_date}</p>
                    <p>Pontuação do Rotten Tomatoes 🍅: {filmDetail?.rt_score}</p>
                </div>
            </main>
        </>
    )
}