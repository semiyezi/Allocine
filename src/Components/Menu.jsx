import React, { useState, useEffect } from 'react'

import { Header, Segment,Image,Button } from 'semantic-ui-react'
import { Navbar,Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

import logo from"../logo.jpeg"


const Menu = () => {
    const [changer, setChanger] = useState({
        backgroundColor:"transparent",
        boxShadow:"",
        transition:'background 0.7s',
        position:"fixed",
        width:"91%",
        top:"0",
        zIndex:"5",
        margin:"0",
        padding:"0"
    })
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const isChange = window.scrollY < 120;
            if(isChange !== true ){
                setChanger({
                  background:"#2C3C65",
                    boxShadow:"",
                    transition:'background 0.7s',
                    position:"fixed",
                    width:"91%",
                    top:"0",
                    zIndex:"5",
                    margin:"0",
                    padding:"0"
                    
                   
                })
            }else {
                setChanger({
                  backgroundColor:"transparent",
                  boxShadow:"",
                  transition:'background 0.7s',
                  position:"fixed",
                  width:"91%",
                  top:"0",
                  zIndex:"5"
                    })
            }
            return ()=>{
                window.removeEventListener("scroll");
              }
        })
    }, [])
    return (
        <div style={changer}>
            <Navbar bg="#fff" expand="lg" >
  <Navbar.Brand href=""><Image src={logo} style={{width:"50px"}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"style={{backgroundColor:"#fff"}} />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="">
      <Link to="/top" mobile={16} tablet={8} computer={4}>
        <Button basic inverted color='violet'>Top</Button>
      </Link>  
      </Nav.Link>
          <Nav.Link href="">
            <Link to="/popular" mobile={16} tablet={8} computer={4}> 
              <Button basic inverted color='violet'>Popular</Button>
            </Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link to="/upcoming" mobile={16} tablet={8} computer={4}> 
              <Button basic inverted color='violet'>Upcoming</Button>
            </Link>
         </Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Menu
