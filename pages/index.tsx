import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loadAmeneties } from "../redux/action/index";


export default function Home({ clusters }: any) {
  const dispatch = useDispatch();
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [nearest, setNearest] = useState(null);

  const lat = clusters.find(
    (cluster: any) => cluster.name === selectedCluster
  )?.lat;
  const lon = clusters.find(
    (cluster: any) => cluster.name === selectedCluster
  )?.lon;

  const handleChange = (e: any) => {
    let { value } = e.target;
    setSelectedCluster(value);
  };
  useEffect(() => {
    if(!selectedCluster) return;
    const fetchNearest = async () => {
      const { data } = await client.query({
        query: gql`
      
        {
    nearest(lat:${lat}, lon:${lon}, maxResults: 10, maxDistance: 1500, filterByPlaceTypes: [STOP, BIKE_PARK,CAR_PARK, BICYCLE_RENT]) {
      edges {
      node {
        place {
          lat
          lon
          ... on Stop {
            locationType
            name
            desc
          }
          ... on BikePark {
            name
            bikeParkId
          }
          ... on CarPark {
            name
            carParkId
            spacesAvailable
          }
          ... on BikeRentalStation {
            name
            bikesAvailable
          }
        }
        distance
      }
    }
  }
  }
        
        `,
      });

      setNearest(data.nearest.edges);
    };
    fetchNearest();
  }, [selectedCluster]);

  const handleList = () => {
    dispatch(loadAmeneties(nearest));
  };
    

  return (
    <div className={styles.container}>
      <h1>Choose a location in Helsinki</h1>
      <div className={styles.box}>
        <select onChange={handleChange}>
          {clusters.map((cluster: any) => (
            <option key={cluster.id}>{cluster.name}</option>
          ))}
        </select>
      </div>
      <div className={styles.wrap}> 
      <Link href='/list'>
      <button className={styles.btn} onClick={handleList} >List of nearby ameneties</button>
      </Link>
      <Link href='/map'>
      <button className={styles.btn}>Nearby ameneties on Map</button>
      </Link>
      </div>
    </div>
   
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        clusters {
          name
          lat
          lon
          id
        }
      }
    `,
  });

  return {
    props: {
      clusters: data.clusters,
    },
  };
}
