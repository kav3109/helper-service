import React, {useState} from 'react';
import db from "../../../../firebase";
import StartResults from "./StartResults";
import FinalResults from "./FinalResults";

function Results() {

    const [started, setStarted] = useState(true);//TODO change to false after testing
    const [dataResults, setDataResults] = useState();
    const [error, setError] = useState(false);

    function prepareSurveyData(questionID) {

        const docRef = db.collection('answers').doc(questionID);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                let results = doc.data();
                setDataResults(results);
                setError(false);
                setStarted(true);
            } else {
                setError(true);
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    function handleStart(id) {
        prepareSurveyData(id.trim())
    }

    return (
        <>
            {!started?<StartResults started={handleStart} error={error}/>:null}
            {started?<FinalResults dataResults={dataResults} />:null}
        </>
    )
}
export default Results;