import React, { useState, useContext } from 'react';
import './Creater.scss';
import Template from '../builder/Template'
import SurveyView from '../builder/SurveyView'

export const SurveyContext = React.createContext();

function CreateSurvey() {

    const [arrQuest, setArrQuest] = useState([]);

    function addQuestion(quest) {
        setArrQuest(arrQuest.concat([quest]));
        console.log(arrQuest);
    }

    return (
        <SurveyContext.Provider value={{addQuestion}}>
            <div className="creater card">
                <div className="card-body">
                    <Template />
                    <SurveyView arrQuests={arrQuest}/>
                </div>
            </div>

        </SurveyContext.Provider>
    )
}
export default CreateSurvey;