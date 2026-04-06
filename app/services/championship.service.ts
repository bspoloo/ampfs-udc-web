export async function getChampionships() {
    const res = await fetch(`${process.env.BACKEND_API_URL}/championship`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (!res.ok) {
        throw new Error("Error al obtener campeonatos");
    }

    return res.json();
}