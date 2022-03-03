import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Pilots from "./pages/Pilots";
import Starships from "./pages/Starships";
import PilotInfo from "./pages/PilotInfo";
import StarshipInfo from "./pages/StarshipInfo";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Pilots' component={Pilots}/>
                <Route path='/Pilot-info' component={PilotInfo} />
                <Route path='/Starships' component={Starships} />
                <Route path='/Starship-Info' component={StarshipInfo} />
            </Switch>
        </BrowserRouter>
    );
    }