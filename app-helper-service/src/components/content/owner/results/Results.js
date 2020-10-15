import React, {useState} from 'react';
import db from "../../../../firebase";
import StartResults from "./StartResults";
import FinalResults from "./FinalResults";

function Results() {

    const [started, setStarted] = useState(false);
    const [dataAnswers, setDataAnswers] = useState();
    const [dataQuestions, setDataQuestions] = useState();
    const [error, setError] = useState(false);

    function prepareAnswersData(questionID) {

        const docRef = db.collection('answers').doc(questionID);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                let results = doc.data();
                setDataAnswers(results);
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

    function prepareQuestionsData(questionID) {

        const docRef = db.collection('questions').doc(questionID);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                let results = doc.data();
                setDataQuestions(results);
            } else {
                setError(true);
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    function handleStart(id) {
        prepareQuestionsData(id.trim());
        prepareAnswersData(id.trim());
    }

    return (
        <>
            {!started?<StartResults started={handleStart} error={error}/>:null}
            {started?<FinalResults dataAnswers={dataAnswers}  dataQuestions={dataQuestions}/>:null}
        </>
    )
}
export default Results;