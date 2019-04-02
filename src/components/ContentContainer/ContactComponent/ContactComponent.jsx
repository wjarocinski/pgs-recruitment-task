import React from 'react';
import styles from './ContactComponent.module.scss';

const ContactComponent = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.formContainer}>
                <form action="">
                    <input type="text" placeholder="Name &lowast;" required/>
                    <input type="email" placeholder="Email &lowast;" required/>
                    <input className={styles.messageInput} type="text" placeholder="Message"/>
                    <button className={styles.submitButton} type='submit'>SEND</button>
                </form>
            </div>
        </div>
    )
}
export default ContactComponent;