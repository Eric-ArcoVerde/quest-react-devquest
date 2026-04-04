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
        
    )
}