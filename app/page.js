import Link from 'next/link';
import Image from 'next/image';

const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    imagen: '/images/Product01.jpg',
    precioOriginal: 100,
    precio: 80,
  },
  {
    id: 2,
    nombre: 'Producto 2',
    imagen: '/images/Product02.jpg',
    precioOriginal: 150,
    precio: 120,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    imagen: '/images/Product03.jpg',
    precioOriginal: 200,
    precio: 160,
  },
  {
    id: 4,
    nombre: 'Producto 4',
    imagen: '/images/Product04.jpg',
    precioOriginal: 100,
    precio: 80,
  },
  {
    id: 5,
    nombre: 'Producto 5',
    imagen: '/images/Product05.jpg',
    precioOriginal: 150,
    precio: 120,
  },
  {
    id: 6,
    nombre: 'Producto 6',
    imagen: '/images/Product06.jpg',
    precioOriginal: 200,
    precio: 160,
  },
  {
    id: 7,
    nombre: 'Producto 7',
    imagen: '/images/Product07.jpg',
    precioOriginal: 100,
    precio: 80,
  },
  {
    id: 8,
    nombre: 'Producto 8',
    imagen: '/images/Product08.jpg',
    precioOriginal: 150,
    precio: 120,
  },
  {
    id: 9,
    nombre: 'Producto 9',
    imagen: '/images/Product09.jpg',
    precioOriginal: 200,
    precio: 160,
  },
  {
    id: 10,
    nombre: 'Producto 10',
    imagen: '/images/Product10.jpg',
    precioOriginal: 100,
    precio: 80,
  },
  {
    id: 11,
    nombre: 'Producto 11',
    imagen: '/images/Product11.jpg',
    precioOriginal: 150,
    precio: 120,
  },
  {
    id: 12,
    nombre: 'Producto 12',
    imagen: '/images/Product12.jpg',
    precioOriginal: 200,
    precio: 160,
  },
  {
    id: 13,
    nombre: 'Producto 13',
    imagen: '/images/Product13.jpg',
    precioOriginal: 100,
    precio: 80,
  },
  {
    id: 14,
    nombre: 'Producto 14',
    imagen: '/images/Product14.jpg',
    precioOriginal: 150,
    precio: 120,
  },
  {
    id: 15,
    nombre: 'Producto 15',
    imagen: '/images/Product15.jpg',
    precioOriginal: 200,
    precio: 160,
  },
];

export default function Productos() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="relative pb-2/3">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                width={300}
                height={300}
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="text-lg font-medium">{producto.nombre}</h2>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-gray-500 text-sm line-through">KD{producto.precioOriginal}</div>
                <div className="text-lg font-bold">KD-{producto.precio}</div>
                <Link legacyBehavior href={`https://api.whatsapp.com/send?phone=+96555024361&text=Hi!%20I%20would%20like%20the%20${producto.nombre}`} passHref>
                  <a className="ml-4 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    <svg className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M13.707 7.293a1 1 0 00-1.414-1.414l-2 2a1 1 0 00-.293.707v1a1 1 0 001 1h1a1 1 0 00.707-.293l2-2zM7 11a1 1 0 00-1 1v2.586l-1.707-1.707A.999.999 0 004 13v4a1 1 0 001 1h8a1 1 0 001-1v-4a.999.999 0 
                        00-1.707-.707L13 14.586V12a1 1 0 00-.293-.707l-2-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Send Whatsapp
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }