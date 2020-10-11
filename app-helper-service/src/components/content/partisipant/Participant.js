import React, {useState} from 'react';
import Start from './Start'


function Participant() {

    const [userData, setUserData] = useState({
        ident: '',
        name: '',
    });
    const [started, setStarted] = useState(false);

    function handleUsetData(id, name) {
        setUserData({
            ident: id,
            name: name
        });
    }

    function handleStarted() {
        setStarted(true);
    }

    return (
        <>
            <Start userName={handleUsetData} started={handleStarted}/>
            {started? <p>{userData.name}</p> : null}
        </>
    )
}
export default Participant;