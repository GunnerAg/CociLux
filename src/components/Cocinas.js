import React, {useRef, useEffect, useReducer} from 'react'
import '../styles/Carousel.scss'


const slides = [
  {
    title: "POLILAMINADO",
    subtitle: "0",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945722/Andrea/carousell/POLILAMINADO_fpmiub.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "1",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945730/Andrea/carousell/POLILAMINADO_1_ic4vbb.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "2",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945731/Andrea/carousell/POLILAMINADO_2_opk8fa.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "3",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945738/Andrea/carousell/POLILAMINADO_3_j95wzm.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "4",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945740/Andrea/carousell/POLILAMINADO_4_f8zjiw.png"
  }, 
  {
    title: "POLILAMINADO",
    subtitle: "5",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945741/Andrea/carousell/POLILAMINADO_5_doaplj.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "6",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945742/Andrea/carousell/POLILAMINADO_6_xgg07f.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "7",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945744/Andrea/carousell/POLILAMINADO_7_itwi37.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "8",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945745/Andrea/carousell/POLILAMINADO_8_wphk3l.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "9",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945746/Andrea/carousell/POLILAMINADO_9_zhnsni.png"
  },
  {
    title: "POLILAMINADO",
    subtitle: "10",
    description: "Descripcion aqui",
    image:
      "https://res.cloudinary.com/gunnerag/image/upload/v1614945747/Andrea/carousell/POLILAMINADO_10_juff7j.png"
  }
];



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
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
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
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Cocinas() {

  {if (window.location.pathname==='/productos'){
    window.onkeydown=(event)=>{
      if(event.keyCode === 39){return dispatch({ type: "NEXT" })}
      else if(event.keyCode === 37){return dispatch({ type: "PREV" })}
      return null
    }
  } 
}
  
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
   
    <div className="slides">
      <button onClick={() => dispatch({ type: "NEXT" })} style={{color:'black', marginLeft: '30vw'}} >‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "PREV" })} style={{color:'black', marginRight:'30vw'}} >›</button>
    </div>
  );
}

export default Cocinas;