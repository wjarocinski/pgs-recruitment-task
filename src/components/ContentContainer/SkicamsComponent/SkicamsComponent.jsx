import React, { useMemo } from 'react';
import styles from './SkicamsComponent.module.scss';

const SkicamsComponent = (props) => {
    const skicamps = props.skiCamps;
    const currentDate = new Date().toLocaleDateString().replace(/\//g, '-');


    const fetchCampImages = useMemo(
        () => {
          if(skicamps !== null) {
            return Object.values(skicamps)
                .map(skicamp => {
                    const cameras = Object.values(skicamp.cams)
                    return [cameras.shift().url, cameras.pop().url]
                })
          }
        },
        [skicamps],
      );
    

    return (
        <div className={styles.skicamsContainer}>
            {skicamps && 
            <div className={styles.skiTile}>
                   {skicamps.map((skicamp, idx) => 
                       <div key={idx} className={styles.tileContent}>
                            <div className={styles.tileHeader}>
                                <p>{skicamp.name}</p>
                                <span>{currentDate}</span>
                            </div>
                           <div className={styles.tileImage}>
                                {fetchCampImages[idx].map(camp => 
                                <img key={camp} src={camp} alt="camps"/>)}  
                           </div>
                           
                       </div>
                       )}
               </div>}
        </div>
    )
}
export default SkicamsComponent;