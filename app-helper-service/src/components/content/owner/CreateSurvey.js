import React, { useState } from 'react';
import './Creater.scss';
import Template from '../builder/Template';
import SurveyView from '../builder/SurveyView';
import {FormattedMessage} from 'react-intl';
import CreationPopup from '../popup/CreationPopup';

export const SurveyContext = React.createContext();

function CreateSurvey() {

    const [arrQuest, setArrQuest] = useState(getStorage());
    const [show, setShow] = useState(false);

    function closePopup() {
        setShow(false);
    }

    function getStorage() {
        let store = localStorage.getItem('surveyAutosave');
        return store? JSON.parse(store): [];
    }

    function addQuestion(quest) {
        let arr = arrQuest.concat([quest]);
        setArrQuest(arr);
        localStorage.setItem('surveyAutosave', JSON.stringify(arr));
    }

    function sendForm() {
        localStorage.clear('surveyAutosave');
        setShow(false);
        console.log('created');//TODO here we send data to farefase
        setArrQuest([]);
    }
    return (
        <SurveyContext.Provider value={{addQuestion}}>
            <div className="creater card">
                <div className="card-body">
                    <Template />
                    {arrQuest.length > 0?
                        <div className="questWrapper">
                            <SurveyView arrQuests={arrQuest} />
                            <div className="btn btn-success add m-1 right" onClick={() => setShow(true)}>
                                <FormattedMessage
                                    id = "app.creator.create"
                                    defaultMessage="Create Survey"
                                />
                            </div>
                        </div> : null
                    }
                </div>
            </div>
            <CreationPopup isPresent={show} create={sendForm} close={closePopup} />
        </SurveyContext.Provider>
    )
}

export default CreateSurvey;