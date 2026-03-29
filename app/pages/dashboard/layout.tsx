import Sidebar from "@/app/components/layout/sidebar/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<>
        <main>
            <Sidebar />
            {children}
        </main>
    </>)
}