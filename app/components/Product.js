import { useState } from 'react'
import Modal from './Modal'

const Product = ({ name, imageUrl, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (event) => {
    setValue(event.target.value)
  }

  const handleSendWhatsApp = () => {
    const message = `Hola, me gustaría comprar el producto ${name} por ${value}`
    const url = `https://wa.me/whatsappphonenumber/?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
      <div className="relative overflow-hidden">
        <img className="w-full h-auto" src={imageUrl} alt={name} onClick={handleModalOpen} />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 flex items-center justify-between">
          <span className="font-bold">{price}</span>
          <button className="text-blue-500" onClick={handleModalOpen}>Ver</button>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <input className="w-1/2 mr-2 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" placeholder="Introduce un valor" value={value} onChange={handleInputChange} />
        <button className="bg-green-500 text-white rounded-full p-2" onClick={handleSendWhatsApp}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v15A2.5 2.5 0 0 0 2.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 0h-15zm8.794 4.652a.712.712 0 0 0-.936.393 4.253 4.253 0 0 0-.648 2.139c0 1.435.702 2.856 1.491 3.928.122.174.206.354.246.544l.133.556c.087.365.33.698.68.882.493.261 1.107.146 1.466-.266a6.484 6.484 0 0 0 1.567-3.799c0-2.265-1.15-4.501-2.429-6.127zm-2.23 6.856c-.04-.02-.088-.042-.128-.062-.77-.357-1.239-1.06-1.239-1.818 0-.76.47-1.462 1.228-1.803.04-.02.087-.042.128-.062l.32-.146a.665.665 0 0 1 .874.365c.203.43.307.89.307 1.375 0 .484-.104.944-.307 1.375a.665.665 0 0 1-.874.365l-.32-.146z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isModalOpen && (
        <Modal imageUrl={imageUrl} onClose={handleModalClose} />
      )}
    </div>
  )

}

  export default Product;