"use client";

import Modal from "../../../_shared/components/ui/Modal";
import EnrollmentForm from "../../../_shared/components/ui/EnrollmentForm";

interface EnrollmentModalProps {
  open: boolean;
  onClose: () => void;
  masterSlug: string;
}

export default function EnrollmentModal({
  open,
  onClose,
  masterSlug,
}: EnrollmentModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Inscrição Mestrado">
      <EnrollmentForm masterSlug={masterSlug} />
    </Modal>
  );
}
