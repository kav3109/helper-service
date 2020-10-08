import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import {FormattedMessage} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const close = <FontAwesomeIcon icon={faTimes}/>;
const ok = <FontAwesomeIcon icon={faCheck}/>;

function CreationPopup(props) {

    const handleClose = () => props.close();
    const handleCreation = () => props.create();

    return (
        <>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.isPresent} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><FormattedMessage
                        id = "app.creator.popup.title"
                        defaultMessage="Are you sure?"
                    />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormattedMessage
                        id = "app.creator.popup.body"
                        defaultMessage="We will not be able to edit form any more"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {close}
                    </Button>
                    <Button variant="primary" onClick={handleCreation}>
                        {ok}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default CreationPopup;