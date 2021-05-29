import React, {useRef, useEffect, useReducer, useState} from 'react'
import '../styles/Carousel.scss'
import { laminado,melamina,canteado,polilaminado,lacado,madera } from './CocinaSlideData';

let slides=[];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active,slides]);

  return ref;
}

let initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
      > <img className="slideBackground" src={slide.image} alt={`Cocina estilo ${slide.title}, ${slide.description}`} rel="preload" as="image"/></div>

      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundPosition: 'bottom',
        }}
      >
        <div className="slideContentInner">
        </div>
      </div>
    </div>
  );
}

function Cocinas(props) {
  var {displaySlides}=props;
  let [displayed, setSlides] = useState(displaySlides)
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  useEffect(() => {
    setSlides(displayed=displaySlides)
   state.slideIndex=0
  }, [displaySlides])
  if(displayed==="LAMINADO"){slides=laminado}
  if(displayed==="MELAMINA"){slides=melamina}
  if(displayed==="CANTEADO"){slides=canteado}
  if(displayed==="POLILAMINADO"){slides=polilaminado}
  if(displayed==="LACADO"){slides=lacado}
  if(displayed==="MADERA"){slides=madera}

  if (window.location.pathname==='/catalogo'){
    window.onkeydown=(event)=>{
      if(event.keyCode === 39){return dispatch({ type: "PREV" })}
      else if(event.keyCode === 37){return dispatch({ type: "NEXT" })}
      return null
    }
  } 


  return (
   
  
    <div className="slides">
      <button onClick={() => dispatch({ type: "NEXT" })} style={{color:'black', marginLeft: '30vw'}} >‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={-offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "PREV" })} style={{color:'black', marginRight:'30vw'}} >›</button>
    </div>
    
  );
}

export default Cocinas;