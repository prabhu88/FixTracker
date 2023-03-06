import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../style/Global'
import { light, dark, pink, green, blue, brown } from '../style/Theme.styled'
import routes from '../routes';
import HeaderNav from '../components/Header';
import Sidebar from '../components/Sidebar';
const Layout = (props) => {
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

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <HeaderNav themes={themes} selectThemes={setSelectedTheme} />
      <div className="wrapper s-layout">        
        <Sidebar />        
        <main id="main" class="s-layout__content ">
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