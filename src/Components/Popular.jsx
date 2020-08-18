import React, { useEffect,useState } from'react'
import axios from'axios'
import { Link } from "react-router-dom";
import Menu from'./Menu'
import { Grid, Image,Pagination, Container,Input,Card,} from 'semantic-ui-react'





function Popular (){
  
  const[videos,setVideos]=useState([]);
  const[data,setData]=useState([]);
  const [pagination,setPagination]=useState([]);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=37aeb7ef66b2e8d4f4c2dc977aea8e27&language=fr-FR&page=${pagination}`)
    .then((res)=>{
      setData(res.data)
      setVideos(res.data.results)
     
    })
    .catch((e)=>console.log(e))
  },[pagination]);
  console.log(data);
  
  
  const rechercher= (recherche) =>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=37aeb7ef66b2e8d4f4c2dc977aea8e27&query=${recherche}`)
    .then((res)=>{
      setData(res.data)
      setVideos(res.data.results)
     
    })
    .catch((e)=>console.log(e))
  };
  
  
  return(
    
    <div>
     
        <Menu /><br/><br/><br/><br/>
        <Input fluid icon='search' placeholder='Search...' onChange={(e)=>rechercher (e.target.value)} style={{position:"fixed",width:"90%",zIndex:"3"}}/><br/>
        <Container style={{marginTop:"50px"}}>
          <div >
            <h1 style={{fontFamily:"monospace",color:"#2C3C65"}}> Vos meilleurs vidéos  </h1><br/>
          </div>
          <Grid>
{videos
.map((item)=>{
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Link to={"/detail/"+item.id}>

        <Card style={{height:"320px"}}>
      <Image src={item.poster_path===null? "https://www.codeur.com/blog/wp-content/uploads/2017/02/video-marketing-original.jpg" : "https://image.tmdb.org/t/p/w500/"+item.poster_path} style={{height:"200px"}}/>
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
<div style={{textAlign:"center"}}>
<Pagination ellipsisItem={null} firstItem={null} lastItem={null} size="mini"  defaultActivePage={1} activePage={pagination}  totalPages={data.total_pages} onPageChange={(e,{activePage}) =>{setPagination(activePage)}}/>
</div >
</Container><br/><br/>

</div>
)
}

export default Popular

