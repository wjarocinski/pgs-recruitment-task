import React from 'react';
import styles from './HeaderComponent.module.scss';
import logo from '../../img/pgs-logo.png';

const headerComponent = ({onMenuElementClick, isActive, currentView}) => {
    isActive = (view) => isActive === view
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="pgs logo"/> 
            </div>
            <div className={styles.buttonBox}>
                <button className={currentView === 'about' ? styles.btnActive : styles.btn} onClick={()=>onMenuElementClick('about')}>ABOUT US</button>
                <button className={currentView === 'cams' ? styles.btnActive : styles.btn} onClick={()=>onMenuElementClick('cams')}>SKICAMS</button>
                <button className={currentView === 'contact' ? styles.btnActive : styles.btn} onClick={()=>onMenuElementClick('contact')}>CONTACT</button>
            </div>
        </div>
    )
}

export default headerComponent;