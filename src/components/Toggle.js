import React, {useState, useEffect} from 'react';
import './Toggle.css';

const THEMES = [
    {
        id: 0,
        name: "theme-one"
    },
    {
        id: 1,
        name: "theme-two"
    },
    {
        id: 2,
        name: "theme-three"
    }
]

const def = THEMES.find(theme => theme.id === 0);

const Toggle = () => {

    const [toggle, setToggle] = useState(def);

    useEffect(()=>{
        const value = toggle.name;
        document.body.className="";
        document.body.classList.add(value);
    })

    const handleAddTheme = (e) => {
        const value = e.target.value;

        const newTheme = THEMES.find(theme => theme.id == value);

        document.body.className = "";

        setToggle(prevTheme => newTheme);

        document.body.classList.add(toggle.name);
    }

    return ( 
        <div className="toggle-wrapper">
            <p>THEME</p>
        <div className="toggle">

           <input type="radio" name="theme" id="1" className="first-theme"
           value="0" onChange={handleAddTheme}/>
           <label htmlFor="1"></label>

           <input type="radio" name="theme" id="2" className="second-theme"
           value="1" onChange={handleAddTheme}/>
           <label htmlFor="2"></label>

           <input type="radio" name="theme" id="3" className="third-theme"
           value="2" onChange={handleAddTheme}/>
           <label htmlFor="3"></label>

           <div className="selector">&nbsp;</div>
        </div>
        </div>
     );
}
 
export default Toggle;