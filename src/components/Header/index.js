import React from 'react';
import './Header.css';
import thalesLogo from '../../images/thalesLogo.png'
import DropDownPart from '../DropDownPart';

export default function Header() {
    return (
        <div className="padding-head">
            <header className="container-head">
                <img style={{width: "200px"}} src={thalesLogo} alt="thalesLogo"/>
                <p className="navbar">Prévision de la date de livraison des composants</p>
                <DropDownPart />
            </header>
        </div>
    )
}
