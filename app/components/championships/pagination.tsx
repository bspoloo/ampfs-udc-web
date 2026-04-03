"use client";

export default function Pagination() {
    return (
        <div className="flex justify-center items-center gap-2 mt-8">

            <button className="px-3 py-1 border border-(--border-dark) rounded hover:bg-(--hover-btn-sidebar)">
                {"<"}
            </button>

            <button className="px-3 py-1 bg-(--btn-activo-sidebar) rounded text-white">
                1
            </button>

            <button className="px-3 py-1 border border-(--border-dark) rounded hover:bg-(--hover-btn-sidebar)">
                2
            </button>

            <button className="px-3 py-1 border border-(--border-dark) rounded hover:bg-(--hover-btn-sidebar)">
                3
            </button>

            <button className="px-3 py-1 border border-(--border-dark) rounded hover:bg-(--hover-btn-sidebar)">
                {">"}
            </button>

        </div>
    );
}