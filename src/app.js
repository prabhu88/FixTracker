import React, {Suspense} from 'react';
import { HashRouter, Route,Switch,Redirect,BrowserRouter}   from 'react-router-dom';
import Layout from './layout/default'
const loading = (
    <div className="spinner-root pt-3 text-center">
      <div className="sp-spinner sp-spinner-pulse">loading</div>
    </div>
)
const App = () => {
    
    return(          
        <HashRouter>
            <Suspense fallback={loading}>  
                <BrowserRouter>              
                    <Switch>
                        <Route path="/Admin" render={(props) => <Layout {...props} />} />
                        <Redirect from="/" to="Admin/Dashboard" />
                    </Switch>  
                </BrowserRouter>              
            </Suspense>        
        </HashRouter>        
    )
}
export default App