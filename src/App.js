import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offers from './Components/Sections/Offers';
import Property from './Components/Sections/Property';
import Destination from './Components/Sections/Destination';
import Explore from './Components/Sections/Explore';
import Planner from './Components/Sections/Planner';
import Inspiration from './Components/Sections/Inspiration';
import Unique from './Components/Sections/Unique';
import Guest from './Components/Sections/Guest';
import DestinationsLove from './Components/Sections/DestinationsLove';
import SaveTime from './Components/Sections/SaveTime';
import Footer from './Components/Sections/Footer';

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
      <SaveTime />
      <Footer />
    </body>
  );
}

export default App;
