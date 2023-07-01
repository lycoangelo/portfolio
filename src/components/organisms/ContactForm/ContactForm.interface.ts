interface ContactProps {
  name: string;
  contact: string;
  label: string;
}

export interface ContactFormProps {
  name: string;
  title: string;
  contactsCollection: {
    items: ContactProps[];
  };
}

export interface ContactRequest {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactResponse {
  message: string;
}
