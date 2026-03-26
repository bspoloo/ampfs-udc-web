export class BodyRequest<E> {
    public static EntityToBody<E>(entity: E): string {
        return JSON.stringify(entity);
    }
}