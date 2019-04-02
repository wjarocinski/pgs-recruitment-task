import React from 'react';
import styles from './AboutComponent.module.scss';

const AboutComponent = (props) => {
    const items = props.items;
    return (
        <div className={styles.contentContainer}>
            {items.map(
                item => 
                (<div key={item.img} className={styles.card}>
                    <img src={item.img} alt="item to display"/>
                    <div className={styles.container}>
                        <h2>{item.title}</h2> 
                        <p>{item.description}</p> 
                    </div>
                </div>)
            )}
        </div>
    )
}
export default AboutComponent;