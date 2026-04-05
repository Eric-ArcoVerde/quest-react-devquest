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
    const filmDetail = data.find(film => film.id === id)

    return (
        <>
        <h2 className="bg-red-400">Detalhes do filme</h2>

        <div>
            <h3>Título: {filmDetail?.title}</h3>
            <p>Descrição: {filmDetail?.description}</p>
            <p>Diretor: {filmDetail?.director}</p>
            <p>Produtor: {filmDetail?.producer}</p>
            <p>Ano de Lançamento: {filmDetail?.release_date}</p>
            <p>Pontuação do Rotten Tomatoes: {filmDetail?.rt_score}</p>
        </div>
        </>
    )
}