import React from 'react'
import Logo from '../components/Logo'
import '../styles/TransitionAnimation.scss'

export default function TransitionAnimation(props) {

    
    return (
        <div className="transition__logo--main" >
            <div className="transition__logo--container animated"
            onAnimationEnd={props.onAnimationEnd} key="transitionAnimation">
                <div className="transition__logo--branding">COCILUX</div>
                <div className="transition__logo--restyle"><Logo/></div>
            </div>
        </div>
    )
}
