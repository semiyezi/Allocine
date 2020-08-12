import React, { useEffect,useState } from'react'
import logo from '../logo.jpeg'
import axios from'axios'
import styled from'styled-components'
import { Link } from "react-router-dom";
import { Grid, Image,Pagination, Container,Input,Card} from 'semantic-ui-react'
import Menus from'./header'
import BackgroungVideo from'./BackgroundVideo'

function TopVideo (){
   
  const [videostop,setVideostop]=useState([]);
  const [data,setData]=useState([]);
  const [pagination,setPagination]=useState(1)
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=37aeb7ef66b2e8d4f4c2dc977aea8e27&language=fr-FR&page=${pagination}`)
    .then((res)=>{
      setData(res.data)
      setVideostop(res.data.results)
     
    })
    .catch((e)=>console.log(e))
  },[pagination]);
  console.log(data);

  const rechercher= (recherche) =>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=37aeb7ef66b2e8d4f4c2dc977aea8e27&query=${recherche}`)
    .then((res)=>{
      setData(res.data)
      setVideostop(res.data.results)
     
    })
    .catch((e)=>console.log(e))
  };
  
  return(
    <div>
    <Menus/>
    <BackgroungVideo/>
    <Container style={{marginTop:"150px"}}>
    <Input fluid icon='search' placeholder='Search...' onChange={(e)=>rechercher (e.target.value)}/>
      <h1 style={{fontFamily:"monospace"}}> Vos meilleurs vidéos</h1>
  <Grid>
  {videostop
  .map((item)=>{
      return (
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <Link to={"/detail/"+item.id}>

        <Card style={{height:"290px"}}>
      <Image src={item.poster_path===null? "https://www.codeur.com/blog/wp-content/uploads/2017/02/video-marketing-original.jpg" : "https://image.tmdb.org/t/p/w500/"+item.poster_path} style={{height:"150px"}}/>
      <Card.Content>
        <Card.Header style={{textAlign:"center",color:"#2C3C65"}}>{item.title} </Card.Header>
        <Card.Meta style={{textAlign:"center",color:"black"}}>{item.popularity}</Card.Meta>
        <Card.Description style={{textAlign:"center",color:"black"}}>
        {item.release_date}
        </Card.Description>
      </Card.Content>

     </Card>
    
    </Link>   
    </Grid.Column>
    )
    })}
</Grid><br/>
<Pagination defaultActivePage={1} activePage={pagination}  totalPages={data.total_pages} onPageChange={(e,{activePage}) =>{setPagination(activePage)}}/>

</Container>
</div>
)
}
export default TopVideo;