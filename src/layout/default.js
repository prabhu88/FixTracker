import React, { useEffect, useState,useRef } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../style/Global'
import { light, dark, pink, green, blue, brown } from '../style/Theme.styled'
import routes from '../routes';
import HeaderNav from '../components/Header';
import Sidebar from '../components/Sidebar';
const { ipcRenderer } = window.require('electron');

const Layout = (props) => {
  const _isMounted = useRef(true);
  const themes = [light, dark, pink, green, blue, brown]
  const [selectedTheme, setSelectedTheme] = useState(light);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  // window.api.receive('fromMain', function (data) {
  //   if (_isMounted.current) {
  //       console.log('called at React')
  //   }
  // });
  useEffect(()=>{
    ipcRenderer.send('informed',selectedTheme.name)
  },[selectedTheme])
  
  useEffect(()=>{
    ipcRenderer.on('update-counter',function (event, data){
      alert('called'+data);
      console.log(event);
    })    
  },[])
  
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <HeaderNav themes={themes} selectThemes={setSelectedTheme} />
      <div className="wrapper layout">        
        <Sidebar />        
        <main id="main" class="layout_content">
            <div className="">
                <div>
                background-color: hsl(0, 0%, 100%);
                </div>
            </div>
            {getRoutes(routes)}
        </main>        
      </div>
    </ThemeProvider>
  )
}
export default Layout