import Sidebar from "@/app/components/layout/sidebar/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<>
        <main className="flex">
            <Sidebar />
            <div className="flex justify-center items-center w-full">
                {children}
            </div>
        </main>
    </>)
}