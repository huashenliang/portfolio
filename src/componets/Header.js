import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Header extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <h1 className='background-heading'>Passion</h1>
                <header>
                    <h1> <Fade bottom cascade> Huashen Liang</Fade></h1>
                </header>
                <Fade bottom>
                <p className='header-title'>
                    Web Developer 
                <br></br>
                    <button><a> Contact Me </a></button>
                </p>
                </Fade>
            </div>
        );
    }
}
 
export default Header;