"use client";

import Modal from "../../../_shared/components/ui/Modal";
import EnrollmentForm from "../../../_shared/components/ui/EnrollmentForm";

interface EnrollmentModalProps {
  open: boolean;
  onClose: () => void;
  masterSlug: string;
  editalUrl?: string;
  contratoUrl?: string;
}

export default function EnrollmentModal({
  open,
  onClose,
  masterSlug,
  editalUrl,
  contratoUrl,
}: EnrollmentModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Inscrição Mestrado">
      <EnrollmentForm masterSlug={masterSlug} editalUrl={editalUrl} contratoUrl={contratoUrl} />
    </Modal>
  );
}
