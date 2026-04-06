import { CheckCircle, XCircle } from "lucide-react";

type ToastType = "success" | "error";

interface ToastProps {
    message: string;
    type: ToastType;
}

export default function Toast({ message, type }: ToastProps) {

    const baseStyles = "fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2 animate-fade-in";

    const typeStyles = {
        success: "bg-green-900 border border-green-500 text-green-400",
        error: "bg-red-900 border border-red-500 text-red-400",
    };

    return (
        <div className={`${baseStyles} ${typeStyles[type]}`}>
            {type === "success" && <CheckCircle size={18} />}
            {type === "error" && <XCircle size={18} />}
            <span>{message}</span>
        </div>
    );
}