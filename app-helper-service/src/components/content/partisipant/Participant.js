import React, {useState} from 'react';
import './participant.scss';
import Start from './Start';
import SurveyForm from './SurveyForm';
import db from '../../../firebase';

function Participant() {

    let surveyID, userName;
    const [started, setStarted] = useState(localStorage.getItem('started'));
    const [questions, setQuestions] = useState();
    const [error, setError] = useState(false);

    function getQuestions(id) {

        const docRef = db.collection('questions').doc(surveyID);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                setQuestions(doc.data());
                setError(false);
                setStarted(true);
                localStorage.setItem('started', true);
            } else {
                setError(true);
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    function handleStarted(id, name) {
        userName = name;
        surveyID = id.trim();
        getQuestions(surveyID);
    }

    return (
        <>
            {!started?<Start started={handleStarted} error={error}/>:null}
            {started?<SurveyForm userName={userName} surveyID={surveyID} questions={questions} />:null}
        </>
    )
}
export default Participant;