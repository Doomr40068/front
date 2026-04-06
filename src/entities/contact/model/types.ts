export interface Contact {
    kay: string;
    value: string;
}

export interface ContactsResponse {
    message: string;
    data: Contact[];
}
