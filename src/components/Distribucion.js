import React from 'react'
import '../styles/Distribucion.scss';

export default function Distribucion() {

    const index =['1.','2.','3.','4.','5.'];
    const types =['Cocina de una fila','Cocina de dos filas','Cocina en forma de L','Cocina en forma de U','Cocina en isla'];
    const descriptions =
    [
        'Estas cocinas representan una solución básica a los problemas de espacio. En su totalidad, debería disponer de 3.60m de longitud, como mínimo, para que resulte funcional.', 
        'Esta estructura dispone de recorridos más cortos, los cuales ofrecen más comodidad al usuario. Para su disposición, se deberá tener en cuenta que necesitan un mínimo de 1.20m entre dos filas de armarios, ya que hay que tener en cuenta la necesidad de espacio para abrir las puertas.',
        'La forma en L es perfecta para las cocinas con determinadas posiciones de puertas y ventanas, acondicionando un lugar para comer.',
        'Las formas en U resultan una distribución aún más confortable por su posición, el usuario dispone de bastante cercanía a los armarios, sin embargo, hay que contar con una anchura mínima de 2.40m para que no se transforme en un espacio estrecho y agobiante.',
        'Si disponemos de una cocina de grandes dimensiones podemos instalar una isla central, aunque debemos contar con un espacio mínimo alrededor de 90cm. Hay que tener en cuenta que para ello también hay que llevar a la parte central instalaciones de agua y luz.',
    ];
    
    let urls=
    [
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1621522720/CANTEADO-06_pbow96.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1622134684/TIPOS%20DE%20DISTRIBUCI%C3%93N/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_1_ayj6d1.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1622134683/TIPOS%20DE%20DISTRIBUCI%C3%93N/Cocilux-Trabajos_Realizados-Cocinas_Madrid-CAN_4_ujd7xe.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1622134683/TIPOS%20DE%20DISTRIBUCI%C3%93N/Cocilux-Trabajos_Realizados-Cocinas_Madrid-COCINA_U.jpg',
        'https://res.cloudinary.com/sl-cocilux/image/upload/f_auto/v1622134684/TIPOS%20DE%20DISTRIBUCI%C3%93N/Cocilux-Trabajos_Realizados-Cocinas_Madrid-POL_6_ubgy70.png',
    ]

    let SectionOne=()=>{
        return (
                <div className="distribucion__section-one" >
                    <div className="distribucion__section-one--image-container"></div>
                    <div className="distribucion__section-one--content-container">
                            <div className="distribucion__section-one--content">Tipos de Distribución</div>
                            <div className="distribucion__section-one--separation-bar"></div>
                    </div>
                </div>
        )
    }

    let SectionTwo=()=>{
        return (
            <section className="distribucion__section-two">
                <div style={{height:'fitContent'}}>
                    <div className="distribucion__section-two--header">Distribución de una cocina</div>
                    <div className="distribucion__section-two--separation-bar"></div>
                    <br/><br/>
                    <div className="distribucion__section-two--caracteristicas">Una organización bien pensada de los electrodomésticos y del espacio del inmueble orientada a la funcionalidad, contribuye notablemente a que los procesos de trabajo y del diseño garanticen un espacio útil y práctico.
                    <br/><br/>Para ello es de vital importancia combinar razonablemente el tipo de diseño con la cantidad de muebles que se desea en relación con el espacio donde se van a situar, de este modo ahorramos movimientos innecesarios y dinamizamos al máximo nuestra área de trabajo. También es importante a tener en cuenta las costumbres que los usuarios tienen a la hora de cocinar, comer, comprar, y sociabilizar.
                    <br/><br/>Para ello, exponemos a continuación una serie de consejos de distribución generales que se ajustan a cualquier tipo de espacio.
                    </div>
                </div>
            </section>
        )
    }

    let SectionThree =({i})=>{
        return(
            <section className="distribucion__section-three">
                <img className="distribucion__section-three--image" src={urls[i]} alt={`Distribucion de ${types[i]}`}/>
                <div className="distribucion__section-three--description"> 
                    <div className="distribucion__section-three--description-header">
                        <div className="distribucion__section-three--description-index">{index[i]}</div>
                        <div className="distribucion__section-three--description-header-text">
                            <div> {types[i]}</div>
                            <div className="distribucion__section-three--separation-bar"></div>
                        </div> 
                    </div>
                    <div className="distribucion__section-three--text">
                    {descriptions[i]}
                    </div>
                </div>
            </section>
        )
    }
    
    return (
        <div >
            <SectionOne/>
            <SectionTwo/>
            {index.map((index,i)=>{return (<SectionThree key={`Distribucciones${i}`} i={i}/>)})}
        </div>
    )
}
