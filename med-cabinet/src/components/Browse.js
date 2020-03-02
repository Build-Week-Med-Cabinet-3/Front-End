import React, { useState, useEffect } from 'react';
import BrowseCard from './BrowseCard';
import BrowseHeader from './BrowseHeader';
import IndividualCard from './IndividualCard';
import axios from 'axios';




const Browse = () => {
    
    const [strain, setStrain] = useState([]);
    

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
             .then(res => {
               console.log(res.data);
               setStrain(res.data.results)
             })
             .catch(err => {
               console.log(err)
             })
      }, [])
    
    
    
    
    
    return (
        <div>
            <BrowseHeader />
            <BrowseCard strain={strain} setStrain={setStrain}/>
            <IndividualCard />

          
     
            
        </div>
    );
};

export default Browse;