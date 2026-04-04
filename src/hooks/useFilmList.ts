import { useQuery } from "@tanstack/react-query";

type Film = {
    id: string;
    title: string;
    description: string;
    director: string;
    producer: string;
    release_date: number;
    rt_score: number;
}

const fetchFilmList = async (limit: number = 10): Promise<Film[]> => {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    if(!response.ok) throw new Error("Erro ao buscar filmes")
        console.log(response.json)
    return response.json();
}

fetchFilmList()

export function useFilmList(limit: number) {
    return useQuery<Film[]>({
        queryKey: ['films', limit],
        queryFn: () => fetchFilmList(limit),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
}