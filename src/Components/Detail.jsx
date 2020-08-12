import React from 'react'
import { Grid, Image, Container, Button } from 'semantic-ui-react'
import  { useEffect,useState } from'react'
import axios from'axios'

import Menus from'./header'
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";


function Detail  () {
  let { id } = useParams();
  const params = { id };
  console.log(params);
  const[detail,setdetail]=useState([]);
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=37aeb7ef66b2e8d4f4c2dc977aea8e27&language=fr-FR`)
    .then((res)=>{
      setData(res.data)
      setdetail(res.data)
      console.log(res.data);
     
    })
    .catch((e)=>console.log(e))
  });
  console.log(data);
  

  return(

  <div>
    <Menus/>
    <Container  style={{backgroundColor:"#2C3C65",color:"#fff",marginTop:"170px"}}>
  <Grid>
    <Grid.Column mobile={16} tablet={8} computer={6}>
    <Image src={"https://image.tmdb.org/t/p/w500/"+ detail.poster_path} />
    </Grid.Column>
    <Grid.Column mobile={16} tablet={12} computer={10}>
      
     <h1>Titre</h1>
     <p>{detail.title}</p>
     <h1>Aperçu du film</h1>
  <p style={{textAlign:"justify",padding:"4%"}} >{detail.overview===null ? ("Pas de résumé disponible pour ce film"):detail.overview}</p>
  <h1>Durée </h1>
  <p>{detail.runtime} secondes</p>
  <p>vote_average: {detail.vote_average} et vote_count:{detail.vote_count}</p>
  
    </Grid.Column>
  </Grid>
  </Container>
  </div>
)
}

export default Detail