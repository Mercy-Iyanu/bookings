import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offers from './Components/Offers';
import Property from './Components/Property';
import Destination from './Components/Destination';
import Explore from './Components/Explore';

function App() {
  return (
    <>
      <Offers />
      <Property />
      <Destination />
      <Explore />
    </>
  );
}

export default App;
