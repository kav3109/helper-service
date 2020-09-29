import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import firebase from './firebase';

function App() {

    // const [data, setData] = useState([]);
    // https://www.youtube.com/watch?v=7xf0Kz6WGu8
    // https://www.youtube.com/watch?v=rSgbYCdc4G0
    // https://www.youtube.com/watch?v=3ZEz-iposj8

    useEffect(() => {
        firebase
            .firestore()
            .collection('helperservice')
            .onSnapshot((snapshot) => {
                // console.log(snapshot);
                snapshot.forEach(doc => {
                    console.log(doc.data())
                });
            })
    },[]);

    return (
        <>
            <Header />
            <Content />
            {/*<form style={{background: "white"}}>*/}
                {/*<input type="text" placeholder="write text"/>*/}
                {/*<input type="submit"/>*/}
            {/*</form>*/}
        </>
    )
}
export default App;