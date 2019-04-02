import React  from 'react';
import styles from './ContentContainer.module.scss';
import AboutComponent from './AboutComponent/AboutComponent';
import ContactComponent from './ContactComponent/ContactComponent';
import SkicamsComponent from './SkicamsComponent/SkicamsComponent';



const ContentContainer = ({currentView, skiCamps, itemsToDisplay}) => {
    
    const views = {
    about: <AboutComponent items={itemsToDisplay}/>,
    contact: <ContactComponent/>,
    cams: <SkicamsComponent skiCamps={skiCamps}/>
}

    return (
        <div className={styles.contentContainer}>
            {(views[currentView])}
        </div>
            
    )
}

export default ContentContainer;