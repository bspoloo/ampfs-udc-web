import { X } from "lucide-react";

interface ConfirmModalProps {
    isOpen: boolean;
    title?: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmModal({
    isOpen,
    title = "Confirmación",
    message,
    onConfirm,
    onCancel,
}: ConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onCancel}
            />

            <div className="relative bg-(--bg-sidebar) border border-(--border-dark) rounded-2xl p-6 w-[90%] max-w-md shadow-xl z-10">

                <button
                    onClick={onCancel}
                    className="absolute top-3 right-3 text-(--text-btn-sidebar) hover:text-white cursor-pointer"
                >
                    <X size={18} />
                </button>

                <h2 className="text-lg font-semibold text-(--text-sidebar) mb-2">
                    {title}
                </h2>

                <p className="text-sm text-(--text-btn-sidebar) mb-6">
                    {message}
                </p>

                <div className="flex justify-end gap-3">

                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-md border border-(--border-dark) text-(--text-sidebar) hover:bg-(--bg-main) cursor-pointer"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-md bg-(--btn-activo-sidebar) text-white hover:opacity-90 cursor-pointer"
                    >
                        Confirmar
                    </button>

                </div>
            </div>
        </div>
    );
}