import React, { useEffect } from 'react';
import { Form, Modal } from 'react-bootstrap';
import DonationForm from './DonationForm';

type DonationModalProps = {
  showModal: boolean;
  setShowModal: (modal: boolean) => void;
};

export default function DonationModal({
  showModal,
  setShowModal,
}: DonationModalProps) {
  useEffect(() => {
    if (showModal) {
      setShowModal(true);
    }
  }, [showModal, setShowModal]);

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size={'lg'}
      scrollable
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <DonationForm />
      </Modal.Body>
    </Modal>
  );
}
