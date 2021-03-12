import React from 'react'
import Cocinas from './Cocinas'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';

import "../styles/Products.css"

export default function Catalogo() {
    return (
        <div>
            <div className="container">
                <Cocinas/>
            </div>
        </div>
    )
}
