import React from 'react';
import {GetQuestions} from '../../../core/service';

function CreateSurvey() {

    const data = GetQuestions();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submited');
        // SendAnswers();
        // Test();
    }

    return (
        <div className="content card w-50">
            <div className="card-body">
                <form className="questions" onSubmit={handleSubmit}>
                    {data.map((data) =>
                        <p key={data.id}>{data.val}</p>
                    )}
                    <input type="submit" />
                </form>

            </div>

        </div>
    )
}
export default CreateSurvey;