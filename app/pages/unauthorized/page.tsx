export default function Unauthorized(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-red-600">Acceso No Autorizado</h1>
            <p className="mt-4">No tienes permisos para acceder a esta página.</p>
            <a href="/" className="mt-4 text-blue-500 hover:underline">
                Volver al inicio
            </a>
        </div>
    );
}