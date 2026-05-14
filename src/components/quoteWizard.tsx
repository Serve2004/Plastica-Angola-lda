import type { ContactForm } from "@/types";
import { useState } from "react";
import { StepCategory } from "./stepCategory";
import { StepContact } from "./setpContact";
import { StepSuccess } from "./setSucess";

interface QuoteWizardProps {
  open: boolean;
  onClose: () => void;
}

export function QuoteWizard({ open, onClose }: QuoteWizardProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [category, setCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    company: "",
    phone: "",
  });

  if (!open) return null;

  function handleClose() {
    onClose();
    setTimeout(() => {
      setStep(1);
      setCategory(null);
      setForm({ name: "", company: "", phone: "" });
    }, 300);
  }

  function handleSelectCategory(id: string) {
    setCategory(id);
    setStep(2);
  }

  function handleFormChange(field: keyof ContactForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    setLoading(true);
    // Substitui por chamada real à API
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep(3);
  }

  if (step === 1)
    return (
      <StepCategory
        selected={category}
        onSelect={handleSelectCategory}
        onClose={handleClose}
      />
    );

  if (step === 2)
    return (
      <StepContact
        form={form}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
        onBack={() => setStep(1)}
        loading={loading}
        onClose={handleClose}
      />
    );

  return <StepSuccess onClose={handleClose} />;
}
