import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/List.module.css'


const list = () => {
    const  ameneties= useSelector((state: any) => state.handleAmeneties);
    
  return (
    <div className={styles.list}>
        <h1>List of nearby ameneties</h1>
        {ameneties && ameneties.map((amenety: any) => (
            <div className={styles.location} key={amenety.node.lon+amenety.node.lat}>
                <h3>Name: {amenety.node.place.name}</h3>
                <p>Distance: {amenety.node.distance}m</p>
                {amenety.node.place.locationType && <p> Location type: {amenety.node.place.locationType}</p>}
                {amenety.node.place.desc && <p>Description: {amenety.node.place.desc}</p>}
                {amenety.node.place.bikesAvailable && <p>Bikes available: {amenety.node.place.bikesAvailable}</p>}
                {amenety.node.place.spacesAvailable && <p>Spaces available: {amenety.node.place.spacesAvailable}</p>}
                {amenety.node.place.bikeParkId && <p>Bike park id: {amenety.node.place.bikeParkId}</p>}
                {amenety.node.place.carParkId && <p>Car park id: {amenety.node.place.carParkId}</p>}
             
             </div>    
                 ))}
                 <Link href='/'>
               <button className={styles.btn} >Go back</button>
                 </Link>
    </div>
  )
}

export default list