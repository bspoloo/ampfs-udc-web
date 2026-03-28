export type DialogDataProps<D> = {
    open: boolean,
    setOpen: (open: boolean) => void;
    data: D
}