import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/MainMenu.scss'

export default function MainMenu(props) {

    let {data, links, withLinks, handleClick, clear}=props;

    if(clear===true){
        return (
            <div className="main__menu--container">
                {data.map((data,i)=>{return(
                    <Link to={links[i]} className="main__menu--link">
                    <button name={data} className="main__menu--button-clear main__menu-spin-clear main__menu-circle-clear" style={{outline:"none"}} onClick={handleClick}>
                    {data} 
                </button>
                </Link>
                )})}            
        </div>
        )  }
    if(withLinks===true){
        return (
            <div className="main__menu--container">
                {data.map((data,i)=>{return(
                    <Link to={links[i]} className="main__menu--link">
                    <button style={{outline:"none"}} className="main__menu--button main__menu-spin main__menu-circle">
                        {data} 
                    </button>
                </Link>
                )})}
            </div>
    )}
    else return (
        <div className="main__menu--container-linkless">
            {data.map((data)=>{return(
                <button name={data} className="main__menu--button main__menu-spin main__menu-circle" style={{outline:"none"}} onClick={handleClick}>
                {data} 
            </button>
            )})}            
    </div>
    )  
}
