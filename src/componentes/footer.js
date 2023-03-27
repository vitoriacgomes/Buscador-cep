
import React from 'react';
import "./footer.css"

const Footer = () =>{
    return(
        <div className='main-footer'>
            <div className='container'>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Designed by Vitória Gomes
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;


