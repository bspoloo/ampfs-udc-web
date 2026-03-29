export default function PlayerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<>
        <div className="bg-amber-400">
            <p>Usando layout del player xd</p>
        </div>
        <main>{children}</main>
    </>)
}