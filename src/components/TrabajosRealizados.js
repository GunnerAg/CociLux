import React from 'react'
import TrabajosRealizadosUnit from '../components/TrabajosRealizadosUnit'
import '../styles/TrabajosRealizados.scss'

export default function TrabajosRealizados() {

    const data = [
        ['https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1622133465/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_9.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_9.0.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1622132956/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_18.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332057/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_21.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1622133312/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_10.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_8.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_8.1.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_7.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_7.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_7.1.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_7.2.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_4.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_4.1.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332052/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_2.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621332052/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_2.2.jpg',
        ],
    ]

    return (
        <div className="trabajos__realizados--grid">
            <div className="trabajos__realizados--header">Trabajos Realizados</div>
                {data.map((d, i)=>{
                    return(
                            <TrabajosRealizadosUnit data={d} key={`Swipper${i}`} />
                    )
                })}
        </div>
    )
}
