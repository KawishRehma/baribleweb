import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Component/Header';
import { ExploreComponent } from './Component/ExploreComponent';
import {BrowserRouter, Route} from 'react-router-dom';
import { Activity } from './Shared/Activity';
import { Following } from './Shared/Following';
import { Howitworks } from './Shared/Howitworks';
import { Myitems } from './Shared/Myitems';
import Explorer from './Component/Explorer';

function App() {
  return (
    <div>
      
      <Header/>
      <BrowserRouter>
      {/* <Route exact path = "/" component={ExploreComponent} /> */}
      <Route exact path = "/myitems" component={Myitems} />
      <Route exact path = "/following" component={Following} />
      <Route exact path = "/activity" component={Activity} />
      <Route exact path = "/howitworks" component={Howitworks} />
      </BrowserRouter>
      <Explorer/>
      
    </div>
  );
}

export default App;
