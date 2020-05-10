import React from 'react';
import { TabContainer } from './components/TabContainer/TabContainer'
import { GetMenu } from './context/AppMenu';
import { NavBar } from './components/Navbar/NavBar';

function App() {
  return (
    <>
      <NavBar AppMenu = { GetMenu() }/>
      <div className="row ml-0 mr-0 main-container ">
        <TabContainer/>
      </div>
    </>
  );
}

export default App;
