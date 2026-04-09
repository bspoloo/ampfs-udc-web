"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Categories from "@/app/components/championships/categories";
import Toast from "@/app/components/ui/toast";
import ConfirmModal from "@/app/components/ui/confirm-modal";
import { reverseStateMap, stateMap, StatusFront } from "@/app/consts/champion-state";
import { Championship } from "@/app/interfaces/championship.interface";
import { getStatusStyles } from "@/app/functions/get-status-styles";
import { usePatchData } from "@/app/hooks/use-patch-data";
import { useGetData } from "@/app/hooks/use-get-data";
import Loader from "@/app/components/loader";

interface ChampionState {
    state: "ACTIVE" | "IN_PROGRESS" | "FINISHED"
}

export default function ChampionshipDetail() {
    const params = useParams();
    const id = params.id as string;

    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pendingStatus, setPendingStatus] = useState<StatusFront | null>(null);
    const [championState, setChampionState] = useState<ChampionState| null>(null);
    const [status, setStatus] = useState<StatusFront>("activo");

    useState(() => {

    });

    const { data: dataPatch, loading: loadPatch, error: errorPatch } = usePatchData<ChampionState, Championship>(`${id}/state`, championState!);
    const { data: championship, loading: loaderChampion, error: errorChampion } = useGetData<Championship>(`championship/${id}`, id);

    const handleChange = (value: StatusFront) => {
        if (value === status) return;
        setPendingStatus(value);
        setIsModalOpen(true);
        setChampionState({...championState, state: stateMap[value]});
    };

    const confirmChange = async () => {
        if (!pendingStatus) return;
        const prev = status;
        setStatus(pendingStatus);
        setIsModalOpen(false);
        setTimeout(() => setToast(null), 3000);
    };

    const cancelChange = () => {
        setIsModalOpen(false);
        setPendingStatus(null);
    };

    if (!championship) return <Loader></Loader>;
    if (errorChampion) return <>{toast && <Toast message={errorChampion ?? "Error en traer el campeonato"} type={toast.type} />}</>
    return (
        <div className="text-white -m-6">
            <div className="relative w-full h-40 sm:h-52 md:h-64 overflow-hidden">

                <img
                    src="/championship_detail.webp"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute top-6 left-0 w-full px-4 sm:px-6">
                    <h2 className="text-xl font-semibold text-(--text-sidebar)">
                        {championship.name}
                    </h2>
                </div>

                <div className="absolute bottom-4 right-4">
                    <select
                        value={status}
                        onChange={(e) => handleChange(e.target.value as StatusFront)}
                        className={`px-4 py-2 rounded-md text-sm outline-none cursor-pointer border bg-(--bg-sidebar) ${getStatusStyles(status)}`}
                    >
                        <option value="activo">Activo</option>
                        <option value="proceso">En proceso</option>
                        <option value="finalizado">Finalizado</option>
                    </select>
                </div>

            </div>

            <Categories />

            {toast && <Toast message={toast.message} type={toast.type} />}

            <ConfirmModal
                isOpen={isModalOpen}
                title="Confirmar cambio de estado"
                message="¿Estás seguro de que deseas cambiar el estado del campeonato?"
                onConfirm={confirmChange}
                onCancel={cancelChange}
            />
        </div>
    );
}