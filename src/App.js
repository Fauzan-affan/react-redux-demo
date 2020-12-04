import React from 'react'
import {Provider} from 'react-redux';
import store from './redux/store/index.js';

import './App.css';

import CakeContainer from './components/Cakes/CakeContainer';
import HookCakeContainer from './components/Cakes/HookCakeContainer.js';
import IceCreamContainer from './components/IceCreams/IceCreamContainer.js';
import BuySomeCakes from './components/Cakes/BuySomeCakes.js';
import ItemContainer from './components/ItemContainer/ItemContainer.js';
import UserContainer from './components/Users/UserContainer.js';

function App() {
  const [category, setCategory] = React.useState("")
  
  const handleCategory = (category) => {
    setCategory(category)
  }
  
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Choose The Example by Category</h1>
        <button onClick={() => handleCategory("Cakes")}>Cakes</button>
        <button onClick={() => handleCategory("Ice Cream")}>Ice Creams</button>
        <button onClick={() => handleCategory("Item Container")}>Item Container</button>
        <button onClick={() => handleCategory("Users")}>Users</button>
        
        <div>
          {
            category === "Cakes" ? (
              <>
                <CakeContainer />
                <hr/>
                <HookCakeContainer />
                <hr/>
                <BuySomeCakes />
                <hr/>
              </>
            ) : 
            category === "Ice Cream" ? (
              <>
                <IceCreamContainer />
              </>
            ) : 
            category === "Item Container" ? (
              <>
                <ItemContainer cake/>
                <hr/>
                <ItemContainer/>
              </>
            ) : 
            category === "Users" ? (
              <UserContainer />
            ) : ""
          }
        </div>
      </div>
    </Provider>
  );
}

export default App;
