import React from 'react'
import styles from "./navbar.module.css"

function Navbar() {
    return ( 
        <div className={styles.nav} >
            <ul className={styles.ulStyle}>
                <li>Skin Care</li>
                <li>Hair</li>
                <li>Fragrance</li>
                <li>home</li>
                <li><img/></li>
            </ul>
            <ul className={styles.ulStyle}>
                <li>Log in</li>
                <li>Cabinet</li>
                <li>Cart</li>
            </ul>
        </div>
     );
}

export default Navbar