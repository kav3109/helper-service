import React, { useState, useContext } from 'react';
import './Creater.scss';
import Template from '../builder/Template'
import SurveyView from '../builder/SurveyView'

export const SurveyContext = React.createContext();

function CreateSurvey() {

    const [arrQuest, setArrQuest] = useState([]);

    function addQuestion(quest) {
        setArrQuest(arrQuest.push(quest));
    }

    return (
        <SurveyContext.Provider value={{addQuestion}}>
            <Template />
            <SurveyView />
        </SurveyContext.Provider>
    )
}
export default CreateSurvey;