import { apiclient } from '@/shared/api/api-client';
import { Contact, ContactsResponse } from '../model/types';

class ContactApi {
    async getContact(): Promise<Contact[]> {
        const request = await apiclient.get<ContactsResponse>('/api/contacts');
        return request.data;
    }
}

export const contactAPI = new ContactApi();
