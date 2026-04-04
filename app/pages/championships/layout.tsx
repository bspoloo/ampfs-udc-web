import Sidebar from "@/app/components/dashboard/sidebar/sidebar";

export default function ChampionshipsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-(--bg-main)">
            <Sidebar />

            <main className="flex-1 p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}