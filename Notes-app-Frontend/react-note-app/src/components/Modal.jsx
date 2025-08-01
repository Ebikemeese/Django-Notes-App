import { useNavigate } from "react-router-dom";
import "./Modal.css";
import { toast } from "react-toastify";

const Modal = ({handleIsOpen, deleteNote}) => {
    const navigate = useNavigate()
    const handleDeleteNote = () => {
        deleteNote()
        navigate("/")
        toast.success("Note deleted successfully")
    }

  return (
    <div className="c-modal-overlay">
      <div className="c-modal">
        <button onClick={handleIsOpen} className="close-button">×</button>
        <div className="c-modal-content">
          <h2>Delete Note</h2>
          <p>Are you want to Delete this note?</p>
          <span className="d-flex justify-content-center">
            <button className="btn btn-danger me-3" onClick={handleDeleteNote}>Delete</button>
            <button onClick={handleIsOpen} className="btn btn-primary">Cancel</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
