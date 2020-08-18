import React from 'react'
import { Grid, Image,Icon, Container,Button} from 'semantic-ui-react'
import  { useEffect,useState } from'react'
import axios from'axios'
import Menu from'./Menu'
import {Link,useParams
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
  })


  return(

  <div>
    <Menu/>
    <Container  style={{backgroundColor:"#fff",color:"##81807F",marginTop:"170px",width:"700px"}}>
      <div className="retour" >
      <Link to="/popular" mobile={16} tablet={8} computer={4}> 
          <Button icon='arrow circle left' style={{backgroundColor:"#fff"}} />
      </Link>
      </div>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={6}>
          <Image src={"https://image.tmdb.org/t/p/w500/"+ detail.poster_path} />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={12} computer={10} >
           <div style={{textAlign:"center",padding:"4%"}} >
          <h3>Titre</h3>
          <p>{detail.title}</p>
          <h3>Aperçu du film</h3>
          <p style={{textAlign:"justify",padding:"4%"}} >{detail.overview}</p>
          <h3>Durée </h3>
          <p>{detail.runtime} minutes</p>
          <h3>Vote</h3>
          <p>  <Icon color='red' name='heart' />  {detail.vote_average}votes </p>
          </div>
        </Grid.Column>
   
      </Grid>
 
    </Container>
  </div>
)
}

export default Detail