import {
  DiversityTrackerFormData,
  NewMemberData,
  TabValues,
} from "@/lib/types/interfaces";
import ContentProvider from "@/utils/ContentProvider";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function useDiversityTrackerForm() {
  const [loading, setLoading] = useState(false);
  const [error_message, setErrorMessage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModalOpen] = useState(false);

  const [formData, setFormData] = useState<DiversityTrackerFormData>({
    self_identity: "",
    age_range: "",
    ethnicity: "",
    disabality: "",
    sexual_orientation: "",
    equity_scale: 1,
    improvement_suggesstions: "",
    grant_provider: "",
    grant_round: "",
    suggestions: "",
    active_grants_participated: true,
  });

  const handleInput: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  interface UpdateData {
    [key: string]: string | string[] | number | boolean;
  }

  const handleUpdate = (newData: UpdateData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error, message } =
        await ContentProvider.addDiversityTracker(formData);
      if (error) {
        setErrorMessage(message);
        setModalOpen(true);
        return;
      }
      setErrorMessage(null);
      setModalOpen(false);
      setShowSuccessModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error_message,
    formData,
    modalOpen,
    showSuccessModal,
    closeModal: () => {
      setModalOpen(false);
    },
    closeSuccessModal: () => {
      setShowSuccessModalOpen(false);
    },
    handleInput,
    handleUpdate,
    handleSubmit,
  };
}
