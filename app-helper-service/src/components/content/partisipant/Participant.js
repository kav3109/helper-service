import React, {useState} from 'react';
import './participant.scss';
import Start from './Start';
import SurveyForm from './SurveyForm';
import db from '../../../firebase';

function Participant() {

    const [started, setStarted] = useState(localStorage.getItem('started'));
    const [surveyData, setSurveyData] = useState();
    const [error, setError] = useState(false);

    function prepareSurveyData(questionID, userName) {

        const docRef = db.collection('questions').doc(questionID);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                let obj = {
                    questionID: questionID,
                    userName: userName,
                    title: doc.data().title,
                    questions: doc.data().questions
                };
                setSurveyData(obj);
                setError(false);
                setStarted(true);
                localStorage.setItem('started', true);
                localStorage.setItem('surveyData', JSON.stringify(obj));
            } else {
                setError(true);
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    function handleStart(id, name) {
        prepareSurveyData(id.trim(), name)
    }

    return (
        <>
            {!started?<Start started={handleStart} error={error}/>:null}
            {started?<SurveyForm surveyData={surveyData} />:null}
        </>
    )
}
export default Participant;