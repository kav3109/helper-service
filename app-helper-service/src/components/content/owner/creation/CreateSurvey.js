import React, { useState } from 'react';
import './owner.scss';
import Template from './Template';
import SurveyView from './SurveyView';
import { FormattedMessage } from 'react-intl';
import CreationPopup from '../../popup/CreationPopup';
import SurveyId from './SurveyId';
import db from '../../../../firebase';

export const SurveyContext = React.createContext();

function CreateSurvey() {

    const [arrQuest, setArrQuest] = useState(getStorage());
    const [show, setShow] = useState(false);
    const [surveyId, setServeyId] = useState('');
    const [title, setTitle] = useState(localStorage.getItem('titleAutosave'));

    function handleTitle(e) {
        setTitle(e.target.value);
        localStorage.setItem('titleAutosave', e.target.value);
    }

    function closePopup() {
        setShow(false);
    }

    function getStorage() {
        let store = localStorage.getItem('questionsAutosave');
        return store? JSON.parse(store): [];
    }

    function addQuestion(quest) {
        let arr = arrQuest.concat([quest]);
        setArrQuest(arr);
        localStorage.setItem('questionsAutosave', JSON.stringify(arr));
    }

    function deleteQuestion(ind) {
        console.log('deleted', ind);
        arrQuest.splice(ind, 1);
        setArrQuest(arrQuest);
        console.log(arrQuest);
        localStorage.setItem('questionsAutosave', JSON.stringify(arrQuest));
    }

    function setResultsDoc(document) {

        //create document for answers
        db.collection("answers").doc(document).set({
            title: title
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

    }

    function sendForm() {

        localStorage.clear('questionsAutosave');
        localStorage.clear('titleAutosave');
        setShow(false); //close popup

        //create survey
        db
            .collection('questions')
            .add({
                questions: arrQuest,
                title: title
            })
            .then((docRef) => {
                let docId = docRef.id;
                setServeyId(docId);
                setArrQuest([]);
                localStorage.setItem('surveyId', docRef.id);
                setResultsDoc(docId);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }
    return (
        <>
            <SurveyContext.Provider value={{addQuestion , deleteQuestion}}>
                <div className="creater card">
                    <div className="card-body">
                        <h4>
                            <FormattedMessage
                                id = "app.creator.title"
                                defaultMessage="Type survey's title" />
                        </h4>
                        <input type="text" name="title" className="form-control question mx-auto mb-1"
                               defaultValue={title}
                               onChange={handleTitle}/>
                        <Template />
                        {arrQuest.length?
                            <div className="questWrapper mb-2">
                                <SurveyView arrQuests={arrQuest} surveyName={title}/>
                                <div className="btn btn-success add m-1 right" onClick={() => setShow(true)}>
                                    <FormattedMessage
                                        id = "app.creator.create"
                                        defaultMessage="Create Survey"
                                    />
                                </div>
                            </div> : null
                        }
                        {surveyId.length? <SurveyId id={surveyId}/>:null}
                    </div>
                </div>
                <CreationPopup isPresent={show} create={sendForm} close={closePopup} />
            </SurveyContext.Provider>
        </>
    )
}

export default CreateSurvey;