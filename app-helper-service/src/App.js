import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/Header";
import Main from "./components/content/Main";
import Owner from "./components/content/owner/Owner";
import Participant from "./components/content/partisipant/Participant";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import firebase from './firebase';
import CreateSurvey from "./components/content/owner/CreateSurvey";
import Results from "./components/content/owner/Results";

function App() {

    // const [data, setData] = useState([]);
    // https://www.youtube.com/watch?v=7xf0Kz6WGu8
    // https://www.youtube.com/watch?v=rSgbYCdc4G0
    // https://www.youtube.com/watch?v=3ZEz-iposj8

    useEffect(() => {
        firebase
            .firestore()
            .collection('helperservice')
            .onSnapshot((snapshot) => {
                // console.log(snapshot);
                snapshot.forEach(doc => {
                    console.log(doc.data())
                });
            })
    },[]);

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