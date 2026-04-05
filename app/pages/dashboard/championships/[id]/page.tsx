import Categories from "@/app/components/championships/categories";

export default function ChampionshipDetail() {
    return (
        <div className="text-white -m-6">
            <div className="relative w-full h-40 sm:h-52 md:h-64 overflow-hidden">
                <img
                    src="/championship_detail.webp"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute top-4 left-0 w-full px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h2 className="text-xl font-semibold text-(--text-sidebar)">Campeonato clausura 2/2026</h2>
                    <select className="bg-(--bg-sidebar) border border-(--border-dark) text-(--text-sidebar) px-4 py-2 rounded-md text-sm outline-none cursor-pointer">
                        <option value="activo">Activo</option>
                        <option value="proceso">En proceso</option>
                        <option value="finalizado">Finalizado</option>
                    </select>
                </div>
            </div>
            <Categories />
        </div>
    );
}