import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function MyModal({ children, ...props }) {
    const { title, isShow, onClose } = props.stateModal;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(isShow || false);
    }, [isShow]);

    return (
        <>
            {isShow && (
                <Modal
                    show={open}
                    onHide={onClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{children}</Modal.Body>
                </Modal>
            )}
        </>
    );
}

export default MyModal;
