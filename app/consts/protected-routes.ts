export const PROTECTED_ROUTES: Record<string, string[]> = {
    '/dashboard': ["admin", "organizer"],
    '/dashboar/championships': ["admin", "user"],
    '/championships': ["admin", "user"],
    '/player': ["admin", "player"],
    '/referee': ["admin", "referee"],
};