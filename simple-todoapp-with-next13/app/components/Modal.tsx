interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void; 
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  if (!modalOpen) return null;

  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className='modal-box relative'>
        <label
          onClick={() => setModalOpen(false)}
          className='close-modal-button'
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;