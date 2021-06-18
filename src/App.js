import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import AppContainer from './AppContainer';

import './App.css';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <BrowserRouter>                
        <div className='App'>
            <AppContainer>
                <Redirect from="/" to="regular" />
                <Route path='/hot' component={Page1}/> 
                <Route path='/regular' component={Page2}/>   
            </AppContainer>                    
        </div>
    </BrowserRouter>
  );
}

export default App;
