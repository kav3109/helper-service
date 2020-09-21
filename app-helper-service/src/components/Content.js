import React, {useContext} from 'react';
// import {FormattedMessage} from 'react-intl';
// import {Context} from "./Wrapper";

function Header(props) {

    // const context = useContext(Context);

    return (
        <div className="content card">
            <div className="card-body">
                <h5 className="card-title">Специальный заголовок</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button type="button" className="btn btn-primary right"><span className="btnText">Главный 1</span></button>
                <br/>
                <button type="button" className="btn btn-primary left">Главный 2</button>
                <br/>
                <button type="button" className="btn btn-primary right">Главный 3</button>
            </div>
        </div>
    )
}
export default Header;