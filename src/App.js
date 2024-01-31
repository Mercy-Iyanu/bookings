import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offers from './Components/Offers';
import Property from './Components/Property';
import Destination from './Components/Destination';
import Explore from './Components/Explore';
import Planner from './Components/Planner';
import Inspiration from './Components/Inspiration';
import Unique from './Components/Unique';
import Guest from './Components/Guest';
import DestinationsLove from './Components/DestinationsLove';

function App() {
  return (
    <body>
      <Offers />
      <Property />
      <Destination />
      <Explore />
      <Planner />
      <Inspiration />
      <Unique />
      <Guest />
      <DestinationsLove />
    </body>
  );
}

export default App;
