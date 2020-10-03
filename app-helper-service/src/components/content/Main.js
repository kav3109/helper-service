import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Link } from 'react-router-dom';

function Main(props) {

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
                <Link to="/owner" className="btn btn-primary w-50 m-1 right">
                    <FormattedMessage
                    id = "app.start.button1"
                    defaultMessage="Owner"
                    />
                </Link>
                <br/>
                <Link to="/participant" className="btn btn-primary w-50 m-1 left">
                    <FormattedMessage
                        id = "app.start.button2"
                        defaultMessage="Participant"
                    />
                </Link>
            </div>
        </div>
    )
}
export default Main;