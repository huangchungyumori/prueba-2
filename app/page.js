import Image from 'next/image'
import { Inter } from 'next/font/google'
import Product from './components/Product'


const products = [
  {
    name: 'Producto 1',
    imageUrl: 'https://via.placeholder.com/300x300',
    price: '$10'
  },
  {
    name: 'Producto 2',
    imageUrl: 'https://via.placeholder.com/300x300',
    price: '$20'
  },
  {
    name: 'Producto 3',
    imageUrl: 'https://via.placeholder.com/300x300',
    price: '$30'
  },
]

const LandingPage = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </div>
  )
}

export default LandingPage;