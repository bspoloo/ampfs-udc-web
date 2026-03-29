import Sidebar from "@/app/components/layout/sidebar/sidebar";

export default function ChampionshipsPage() {
    return (
        <div className="flex">
            <Sidebar />
            <div>
                <h2 className="text-white p-10">Campeonato</h2>
            </div>
        </div>
    );
}