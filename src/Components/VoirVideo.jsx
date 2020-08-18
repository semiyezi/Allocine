// import React,{ useEffect,useState } from 'react'
// import PropTypes from 'prop-types'
// import Menu from './Menu'
// import YouTube from 'react-youtube';
// import axios from'axios'
// import {Link,
  
//     useParams
//   } from "react-router-dom";
  




// function VoirVideo(props) {
//     let { id } = useParams();
//   const params = { id };
//   console.log(params);
//      const [data,setData]=useState([]);
//      const [lireVideo,setLireVideo]=useState([]);
//      const[videos,setVideos]=useState([]);

//   useEffect(()=>{
    
//     axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=37aeb7ef66b2e8d4f4c2dc977aea8e27&language=fr-FR`)
//     .then((res)=>{
//       setLireVideo(res.data.results);
//       console.log("------------");
//       console.log(res.data.results);
     
     
//     })
//     .catch((e)=>console.log(e))
// },[]);
// console.log(data);
// const seeVideo = ()=>{
//     if(typeof lireVideo === 'undefined'){
//         return  <div></div>
//     }else{
//         return <YouTube VideoId={lireVideo.key} autoplay/>
//     }
// }
//     return (
//         <div>
//           <Menu/>
//           {seeVideo()}

//         </div>
//     )
// }

// VoirVideo.propTypes = {

// }

// export default VoirVideo

