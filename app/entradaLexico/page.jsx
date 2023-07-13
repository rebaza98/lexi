'use client'
import { EnvelopeIcon, PhoneIcon, CheckCircleIcon, AcademicCapIcon, CodeBracketSquareIcon, AdjustmentsHorizontalIcon, FolderMinusIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

const entrada = [
  {
    palabra:'engrasar',
    definiciones: [
        {
            def:'Poner grasa o una sustancia aceitosa a una cosa',
            censura: false,
            marcas:['<Mec>','<mecánica>', 'En la mecánica,'],
        },
        {
            def:'Untar o ensuciar con grasa',
            censura: false,
            marcas:['<Mec>','<mecánica>', 'En la mecánica,'],
        },
        
    ],
    ejemplos:[
        {
            ejem: 'Haz el favor de engrasar las bisagras para que la puerta no chirríe.',
            censura: false,
            
        },
        {
            ejem: 'Papa engrasa el motor del auto.',
            censura: false
        },
        
    ],   
    marcas:['<MEC>','<mecánica>', 'En la mecánica, '],
    
  },
  {
    palabra:'perro',
    definiciones: [
        {
            def:'Mamífero doméstico de la familia de los Cánidos, de tamaño, forma y pelaje muy diversos, según las razas.',
            censura: false,
            marcas:['<m>','<mam>', 'Mamifero '],
        },
        {
            def:'Alumno del primer año de una institución de formación militar',
            censura: true,
            marcas:['<vul>','<vulgar>', 'uso Vulgar, '],
        },
        
    ],
    ejemplos:[
        {
            ejem: 'El vecino tiene como mascota un perro de raza dalmata.',
            censura: false
        },
        {
            ejem: 'Es un perro del colegio Leoncio Prado',
            censura: true
        },
        
    ],   
    marcas:['<MEC>','<mecánica>', 'En la mecánica, '],
    
  }
//   {
//     palabra:'engrasar',
//     def: ['Poner <una persona> grasa o una sustancia aceitosa a [una cosa]','Poner grasa o sustancia aceitosa a una cosa', 'Poner grasa o sustancia aceitosa a una cosa'],
//     ejem:'Haz el favor de engrasar las bisagras para que la puerta no chirríe.',
//     marcas:['<MEC>','<mecánica>', 'En la mecánica'],
//     name: 'Jane Cooper',
//     title: 'Regional Paradigm Technician',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   },
//   {
//     name: 'Jane Cooper',
//     title: 'Regional Paradigm Technician',
//     role: 'Admin',
//     email: 'janecooper@example.com',
//     telephone: '+1-202-555-0170',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
//   }
  // More people...
]

export default function Home() {
    const [indiceMaestro, setIndiceMaestro] = useState(0)
    const [censuraMaestro, setCensuraMaestro] = useState(false)

    const handleDescriptiva = () => {
        setIndiceMaestro(1)
    }

    const handleEscolar = () => {
        setIndiceMaestro(2)
    }

    // useEffect( () => {
    //     updateSinonimos()
    //   }, [indiceMaestro] )
      
    const handleAdaptacion = () => {
        setCensuraMaestro(true)

    }
    
  return (
    <>
    
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {entrada.map((palabra, i) => (
        <li key={i} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 ">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{palabra.palabra}.</h3>
              </div>
              {palabra.definiciones.map((def, j) => (
                <>
                {indiceMaestro === 2 && def.censura ? (<p className="mt-1 text-sm text-red-500"><strong>{def.marcas[indiceMaestro]}</strong>{def.def}</p>):(<p className="mt-1 text-sm text-def-500"><strong>{def.marcas[indiceMaestro]}</strong>{def.def}</p>)}
                </>
                
                
              ))}
              
            
            </div>
          </div>
          <div className=' pt-4 pb-4 ml-4' >
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="  " >
              {palabra.ejemplos.map((ejem, j) => (
                <>
                {indiceMaestro === 2 && ejem.censura ? (<p className="mt-1 text-sm text-red-500">Ejem {j+1}: <strong className='italic' >{ejem.ejem}</strong></p>):(<p className="mt-1 text-sm text-def-500">Ejem {j+1}: <strong className='italic' >{ejem.ejem}</strong></p>)}
                </>
                
              ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <br />
    <div className='flex justify-between ' >
    <button
        onClick={() => handleDescriptiva()}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
            <CodeBracketSquareIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Marca Normal
        </button>
        <button
        onClick={() => handleDescriptiva()}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
            <AdjustmentsHorizontalIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Marca Descriptiva
        </button>
        <button
        onClick={()=>handleEscolar()}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
            <AcademicCapIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Texto Escolar
        </button>
        <button
            onClick={() => handleAdaptacion()}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
            <FolderMinusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Adaptacion
        </button>
    </div>
    </>
  )
}
