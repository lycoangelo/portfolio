import { ContentBody } from "@app/components/atoms/RichText/RichText.interface";

interface ContactProps {
  contact: string;
  label: string;
  name: string;
}

export interface ContactFormProps {
  consent: ContentBody;
  contactsCollection: {
    items: ContactProps[];
  };
  name: string;
  title: string;
}

export interface ContactRequest {
  email?: string;
  message?: string;
  name?: string;
  subject?: string;
}

export interface ContactResponse {
  message: string;
}
