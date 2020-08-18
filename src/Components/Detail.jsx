import React from 'react'
import { Grid, Image, Container,Button} from 'semantic-ui-react'
import  { useEffect,useState } from'react'
import axios from'axios'
import YouTube from 'react-youtube';

import Menu from'./Menu'
import {Link,
  
  useParams
} from "react-router-dom";


function Detail  () {
  let { id } = useParams();
  const params = { id };
  console.log(params);
  const[detail,setdetail]=useState([]);
  const [data,setData]=useState([]);
  const [lireVideo,setLireVideo]=useState([]);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=37aeb7ef66b2e8d4f4c2dc977aea8e27&language=fr-FR`)
    .then((res)=>{
      setData(res.data)
      setdetail(res.data)
      console.log(res.data);
     
    })
    .catch((e)=>console.log(e))
  })


  return(

  <div>
    <Menu/>
    <Container  style={{backgroundColor:"#fff",color:"##81807F",marginTop:"170px"}}>
      <div className="retour" >
      <Link to="/upcoming" mobile={16} tablet={8} computer={4}> 
          <Button icon='arrow circle left' style={{backgroundColor:"#fff"}} />
      </Link>
      </div>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={6}>
          <Image src={"https://image.tmdb.org/t/p/w500/"+ detail.poster_path} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={12} computer={10} >
           {lireVideo.map(video=><YouTube videoId={video.key} autoplay/> )}
          <h1>Titre</h1>
          <p>{detail.title}</p>
          <h1>Aperçu du film</h1>
          <p style={{textAlign:"justify",padding:"4%"}} >{detail.overview===null ? "Pas de résumé disponible pour ce film":detail.overview}</p>
          <h1>Durée </h1>
          <p>{detail.runtime} minutes</p>
          <h1>Vote</h1>
          <p> {detail.vote_average} </p>
        </Grid.Column>
   
      </Grid>
 
    </Container>
  </div>
)
}

export default Detail