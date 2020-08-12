import React from 'react'
import { Header, Segment,Image,Button } from 'semantic-ui-react'
import { Link ,BrowserRouter} from "react-router-dom";

import logo from"../logo.jpeg"





const Menus =() => (
  <div>
  <Segment clearing style={{backgroundColor:"#2C3C65",width:"100%",position:"fixed",zIndex:"5",top:"0"}}>
    <Header as='h2' floated='right'>
     <div>
         <Link to="/top" mobile={16} tablet={8} computer={4}>

         <Button basic inverted color='violet'>Top</Button>
         </Link>   
         <Link to="/popular" mobile={16} tablet={8} computer={4}> 
         <Button basic inverted color='violet'>Popular</Button>
         </Link>
         <Link to="/upcoming" mobile={16} tablet={8} computer={4}> 
         <Button basic inverted color='violet'>Upcoming</Button>
         </Link>
     </div>
      
    </Header>
    <Header as='h2' floated='left'>
    <Image src={logo} />
    </Header>
    
  </Segment>
  {/* <GridExampleColumnCount/> */}
 
  </div>
)

export default Menus