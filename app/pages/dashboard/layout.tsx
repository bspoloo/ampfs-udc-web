import Sidebar from "@/app/components/layout/sidebar/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<>
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    </>)
}