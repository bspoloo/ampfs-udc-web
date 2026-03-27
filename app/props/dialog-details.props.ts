export type DialogDetailsProps = {
    open: boolean,
    setOpen: (open: boolean) => void;
    data: {
        email: string,
        password: string,
        confirmPassword: string
    }
}