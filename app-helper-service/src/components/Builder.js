import React from 'react';
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const trash = <FontAwesomeIcon icon={faTrash}/>;

function AddCustomInput() {
    return (
        <div className="input-group mb-1">
            <FormattedMessage id="app.creator.option" defaultMessage="Your option">
                {(message) => <input type="text" className="form-control" placeholder={message} />}
            </FormattedMessage>
            <div className="input-group-append">
                <span className="input-group-text">{trash}</span>
            </div>
        </div>
    )
}
export default AddCustomInput;