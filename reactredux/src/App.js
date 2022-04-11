import React from 'react';
import { Provider } from 'react-redux';
import { milkStore } from './redux/milkStore';
import MilkContainer from './components/milkContainer'


function App() {
  return (
       <Provider store = {milkStore}>
         <div>
           <MilkContainer />
         </div>
       </Provider>
  );
}

export default App;
