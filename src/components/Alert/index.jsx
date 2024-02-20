import React, { useEffect, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";

function MyAlert(props) {
    const { title, isShow, onClose, onSave } = props.stateAlert;

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(isShow || false);
    }, [isShow]);

    return (
        <>
            <Modal
                show={open}
                backdrop="static"
                keyboard={false}
                size="sm"
                centered
            >
                <Alert show={onClose} variant="danger" className="m-0">
                    <Alert.Heading>
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </Alert.Heading>
                    <p>{title}</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button
                            onClick={onSave}
                            variant="success"
                            size="sm"
                        >
                            <i className="fa-regular fa-circle-check"></i> Yes
                        </Button>
                        &nbsp;
                        <Button onClick={onClose} variant="secondary" size="sm">
                            <i className="fa-regular fa-circle-xmark"></i> No
                        </Button>
                    </div>
                </Alert>
            </Modal>
        </>
    );
}

export default MyAlert;
