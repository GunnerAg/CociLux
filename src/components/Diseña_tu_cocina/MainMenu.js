import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/MainMenu.scss'

export default function MainMenu(props) {

    let {data, links, withLinks, handleClick, clear}=props;

    if(clear===true){
        return (
            <div className="main__menu--container">
                {data.map((data,i)=>{return(
                <Link to={links[i]}  key={`MainMenuLinkClear${i}`}  className="main__menu--link">
                    <button name={data} className="main__menu--button-clear main__menu-spin-clear main__menu-circle-clear" style={{outline:"none"}} onClick={handleClick}>
                        {data.includes(' ')? (data.split(' ').map((elem)=>{return(<div>{elem}<br/></div>)})):(data)} 
                    </button>
                </Link>
                )})}            
        </div>
        )  }
    if(withLinks===true){
        return (
            <div className="main__menu--container">
                {data.map((data,i)=>{return(
                    <Link to={links[i]} key={`MainMenuLinkDark${i}`} className="main__menu--link">
                    <button style={{outline:"none"}} className="main__menu--button main__menu-spin main__menu-circle">
                        {data.includes(' ')? (data.split(' ').map((elem)=>{return(<div>{elem}<br/></div>)})):(data)} 
                    </button>
                </Link>
                )})}
            </div>
    )}
    else return (
        <div className="main__menu--container-linkless">
            {data.map((data,i)=>{return(
                <button key={`MainMenuButton${i}`} name={data} className="main__menu--button main__menu-spin main__menu-circle" style={{outline:"none"}} onClick={handleClick}>
                {data.includes(' ')? (data.split(' ').map((elem)=>{return(<div>{elem}<br/></div>)})):(data)} 
            </button>
            )})}            
    </div>
    )  
}
