import React, { useState } from 'react';
import './Creater.scss';
import Template from '../builder/Template';
import SurveyView from '../builder/SurveyView';
import {FormattedMessage} from 'react-intl';
import CreationPopup from '../popup/CreationPopup';

export const SurveyContext = React.createContext();

function CreateSurvey() {

    const [arrQuest, setArrQuest] = useState(getStorage());
    let isCreated = false;

    function getStorage() {
        let store = localStorage.getItem('surveyAutosave');
        return store? JSON.parse(store): [];//TODO ask why we cannot see last added question
    }

    function addQuestion(quest) {
        setArrQuest(arrQuest.concat([quest]));
        localStorage.setItem('surveyAutosave', JSON.stringify(arrQuest));
    }

    function createSurvey() {
        console.log('created');
    }

    function openPopup() {
        console.log('opened');
    }

    function clearStorage() {
        localStorage.clear('surveyAutosave')
    }

    return (
        <SurveyContext.Provider value={{addQuestion}}>
            <div className="creater card">
                <div className="card-body">
                    <Template />
                    {arrQuest.length > 0?
                        <div className="questWrapper">
                            <SurveyView arrQuests={arrQuest} />
                            <div className="btn btn-success add m-1 right" onClick={openPopup}>
                                <FormattedMessage
                                    id = "app.creator.create"
                                    defaultMessage="Create Survey"
                                />
                            </div>
                        </div> : null
                    }
                </div>
            </div>
        </SurveyContext.Provider>
    )
}

export default CreateSurvey;