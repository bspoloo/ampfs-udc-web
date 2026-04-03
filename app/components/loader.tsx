export default function Loader() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div id="loading-wrapper">
                <div id="loading-text">Cargando...</div>
                <div id="loading-content"></div>
            </div>
        </div>
    );
}