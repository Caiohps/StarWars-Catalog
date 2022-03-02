import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Pilots from "./pages/Pilots";
import Starships from "./pages/Starships";
import pilotInfo from "./pages/PilotInfo";
import starshipInfo from "./pages/StarshipInfo";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Pilots' component={Pilots}/>
                <Route path='/Pilot-info' component={pilotInfo} />
                <Route path='/Starships' component={Starships} />
                <Route path='/Starship-info' component={starshipInfo} />
            </Switch>
        </BrowserRouter>
    );
    }