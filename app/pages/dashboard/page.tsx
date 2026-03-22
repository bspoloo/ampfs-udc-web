
export default function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-green-600">Bienvenido al Dashboard</h1>
            <p className="mt-4">Aquí puedes gestionar tus campeonatos y equipos.</p>
            <a href="/championships" className="mt-4 text-blue-500 hover:underline">
                Ver Campeonatos
            </a>
        </div>
    );
}