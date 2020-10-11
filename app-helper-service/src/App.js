import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Main from "./components/content/Main";
import Owner from "./components/content/owner/Owner";
import Participant from "./components/content/partisipant/Participant";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateSurvey from "./components/content/owner/CreateSurvey";
import Results from "./components/content/owner/Results";

function App() {

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/owner" component={Owner} />
                    <Route path="/createSurvey" component={CreateSurvey} />
                    <Route path="/results" component={Results} />
                    <Route path="/participant" component={Participant} />
                    <Route component={Main} />
                </Switch>
            </Router>
        </>
    )
}
export default App;