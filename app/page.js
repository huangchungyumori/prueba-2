import Link from 'next/link';
import Image from 'next/image';

const productos = [
  {
    id: 1,
    nombre: 'AirFryer',
    imagen: '/images/Product01.jpg',
    precioOriginal: 39.9,
    precio: 25,
  },
  {
    id: 2,
    nombre: 'Slat+Storage+Frame+Mattress (140x220)',
    imagen: '/images/Product02.jpg',
    precioOriginal: 180,
    precio: 125,
  },
  {
    id: 3,
    nombre: 'Wardrobe KLEPPSTAD (117x176)',
    imagen: '/images/Product03.jpg',
    precioOriginal: 55,
    precio: 35,
  },
  {
    id: 4,
    nombre: 'Folding table - NORDEN/TERJE',
    imagen: '/images/Product04.jpg',
    precioOriginal: 89,
    precio: 60,
  },
  {
    id: 5,
    nombre: 'SmartTV Wansa WUD50KOA50S/C1Z1 ',
    imagen: '/images/Product05.jpg',
    precioOriginal: 105,
    precio: 75,
  },
  {
    id: 6,
    nombre: 'MALM Drawer - 40x55',
    imagen: '/images/Product06.jpg',
    precioOriginal: 13.95,
    precio: 7,
  },
  {
    id: 7,
    nombre: 'Room Divider HALDAGER 16',
    imagen: '/images/Product07.jpg',
    precioOriginal: 36,
    precio: 20,
  },
  {
    id: 8,
    nombre: 'sofa bed SKILLEBEKK',
    imagen: '/images/Product08.jpg',
    precioOriginal: 78.4,
    precio: 55,
  },
  {
    id: 9,
    nombre: 'LACK coffe table 90x55 ',
    imagen: '/images/Product09.jpg',
    precioOriginal: 6.9,
    precio: 4,
  },
  {
    id: 10,
    nombre: 'Nisse Folding Chair',
    imagen: '/images/Product10.jpg',
    precioOriginal: 8.5,
    precio: 5,
  },
  {
    id: 11,
    nombre: 'Microwave',
    imagen: '/images/Product11.jpg',
    precioOriginal: 18.9,
    precio: 10,
  },
  {
    id: 12,
    nombre: 'Cordless drill',
    imagen: '/images/Product12.jpg',
    precioOriginal: 12,
    precio: 6,
  },
  {
    id: 13,
    nombre: 'Electric drip Coffee Maker',
    imagen: '/images/Product13.jpg',
    precioOriginal: 16.9,
    precio: 9,
  },
  {
    id: 14,
    nombre: 'HILLEBORG BlockOut curtains (145x300)',
    imagen: '/images/Product14.jpg',
    precioOriginal: 14.5,
    precio: 7,
  },
  {
    id: 15,
    nombre: 'Wall Bracket',
    imagen: '/images/Product15.jpg',
    precioOriginal: 16.9,
    precio: 8,
  },
  {
    id: 16,
    nombre: 'IKEA 8 Frame Set Black',
    imagen: '/images/Product16.jpg',
    precioOriginal: 19.5,
    precio: 9,
  }
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