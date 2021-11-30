import { MyProvider } from '../Context';
import { Home } from './organisms/Home';
import { Statistics } from './organisms/Statistics';

function App() {

  return (

    <MyProvider>
      
      <Home/>

      <Statistics/>

    </MyProvider>

  );
}

export default App;
