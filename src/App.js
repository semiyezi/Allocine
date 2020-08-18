import React from 'react';
import Upcoming from'./Components/Upcoming'
import TopVideo from'./Components/Top'
import Popular from'./Components/Popular'
import Detail from './Components/Detail'
import { BrowserRouter,Route,Switch} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div className="container">
        

        
        <BrowserRouter>
        <Switch> 
        <Route exact path="/" component={Upcoming}/>
        <Route path="/top" component={TopVideo}/>
        <Route  path="/popular" component={Popular}/>
        <Route  path="/upcoming" component={Upcoming}/>
        <Route path="/detail/:id" component={Detail}/>
       
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
     }
export default App
