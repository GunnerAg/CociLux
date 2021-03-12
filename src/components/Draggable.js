import React from 'react'
import {motion, useMotionValue,useTransform} from 'framer-motion'

export default function Draggable() {
    const x = useMotionValue(0)
    const scale = useTransform(x, [-200, 200], [1.5, 0.5])
    return (
        <div>
            <motion.h3 className="titulo" drag={"x"} x={x} scale={scale}> COCILUX · Diseño de cocinas </motion.h3>
        </div>
    )
}
