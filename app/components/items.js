import Link from 'next/link';
import Image from 'next/image';

const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    imagen: 'public\images\Product01.jpg',
    precioOriginal: 100,
    precio: 80,
  },
  {
    id: 2,
    nombre: 'Producto 2',
    imagen: 'public\images\Product02.jpg',
    precioOriginal: 150,
    precio: 120,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    imagen: 'public\images\Product03.jpg',
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
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="text-lg font-medium">{producto.nombre}</h2>
              <div className="mt-2 flex items-center justify-between">
                <div className="text-gray-500 text-sm line-through">${producto.precioOriginal}</div>
                <div className="text-lg font-bold">${producto.precio}</div>
                <Link href={`https://api.whatsapp.com/send?phone=+123456789&text=Hola!%20Quiero%20comprar%20${producto.nombre}`} passHref>
                  <a className="ml-4 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    <svg className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M13.707 7.293a1 1 0 00-1.414-1.414l-2 2a1 1 0 00-.293.707v1a1 1 0 001 1h1a1 1 0 00.707-.293l2-2zM7 11a1 1 0 00-1 1v2.586l-1.707-1.707A.999.999 0 004 13v4a1 1 0 001 1h8a1 1 0 001-1v-4a.999.999 0 
                        00-1.707-.707L13 14.586V12a1 1 0 00-.293-.707l-2-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Comprar por Whatsapp
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }