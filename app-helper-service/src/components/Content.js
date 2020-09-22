import React, {useContext} from 'react';
import {FormattedMessage} from 'react-intl';

function Header(props) {

    return (
        <div className="content card">
            <div className="card-body">
                <h5 className="card-title">
                    <FormattedMessage
                        id = "app.start.title"
                        defaultMessage="Choose your role"
                    />
                </h5>
                <p className="card-text">
                    <FormattedMessage
                    id = "app.start.description"
                    defaultMessage="Are you participant or owner of a quize?"
                    />
                </p>
                <button type="button" className="btn btn-primary w-50 m-1 right"><span className="btnText">
                    <FormattedMessage
                    id = "app.start.button1"
                    defaultMessage="Owner"
                    />
                </span></button>
                <br/>
                <button type="button" className="btn btn-primary w-50 m-1 left">
                    <FormattedMessage
                        id = "app.start.button2"
                        defaultMessage="Participant"
                    />
                </button>
            </div>
        </div>
    )
}
export default Header;