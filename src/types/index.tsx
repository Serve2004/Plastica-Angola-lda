export interface ContactForm {
  name: string;
  company: string;
  phone: string;
}

export interface SendMenssageForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}