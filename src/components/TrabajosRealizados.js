import React from 'react'
import TrabajosRealizadosUnit from '../components/TrabajosRealizadosUnit'
import '../styles/TrabajosRealizados.scss'

export default function TrabajosRealizados() {

    const data = [
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332057/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_21.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332057/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_20.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332056/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_19.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1622132956/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_18.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332057/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_17.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1622133037/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_15.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1622133136/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_13.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1622133087/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_14.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332056/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_12.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1622133230/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_11.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1622133273/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_11.0.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1622133312/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_10.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1622133413/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_10.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1622133373/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_10.1.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1622133465/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_9.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_9.0.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_8.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_8.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_8.1.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_7.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_7.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332055/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_7.1.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_7.2.jpg',
        ], 
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_6.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_6.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_6.1.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_6.2.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_6.3.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_5.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_5.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_5.1.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_5.2.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332054/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_5.3.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_4.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_4.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_4.1.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1622133576/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_3.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1622133673/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_3.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1622133620/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_3.1.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1621332052/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_2.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_2.0.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332052/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_2.1.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332052/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_2.2.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1621332053/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_2.3.jpg',
        ],
        ['https://res.cloudinary.com/sl-cocilux/image/upload/v1622133753/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_1.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/v1622133718/TRABAJOS%20REALIZADOS/Cocina%201/Cocilux-Trabajos_Realizados-Cocinas_Madrid-MOD_cocina_1.0.jpg',
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
