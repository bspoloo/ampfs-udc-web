import ChampionshipsHeader from "@/app/components/championships/championships-header";
import ChampionshipsList from "@/app/components/championships/championships-list";
import Pagination from "@/app/components/championships/pagination";
import Sidebar from "@/app/components/layout/sidebar/sidebar";

export default function ChampionshipsPage() {
    return (
        <div className="flex h-screen bg-(--bg-main)">
            <Sidebar />

            <main className="flex-1 p-6 overflow-y-auto">
                <ChampionshipsHeader />
                <ChampionshipsList />
                <Pagination />
            </main>
        </div>
    );
}