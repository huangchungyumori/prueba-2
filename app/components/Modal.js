import ReactDOM from 'react-dom'

const Modal = ({ imageUrl, name, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-75" onClick={onClose}></div>
      <div className="bg-white p-4 rounded-lg">
        <img className="w-full h-auto" src={imageUrl} alt={name} />
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal;