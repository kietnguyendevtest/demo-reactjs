import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, ButtonGroup, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import booksApi from "../../api/booksApi";
import MyModal from "../../components/Modal";
import MyAlert from "../../components/Alert";

function Books() {
    const [rowData, setRowData] = useState([]);
    const initStateModal = {
        action: "",
        title: "",
        isShow: false,
        onClose: () => {
            setStateModal({ ...stateModal, isShow: false });
            setStateForm(initStateForm);
        },
    };
    const [stateModal, setStateModal] = useState(initStateModal);

    const initStateAlert = {
        action: "",
        title: "",
        isShow: false,
        onClose: () => {
            setStateAlert({ ...stateAlert, isShow: false });
        },
        onSave: () => { }
    }
    const [stateAlert, setStateAlert] = useState(initStateAlert);

    const initStateForm = {
        idForm: 0,
        book_name: "",
        book_price: "",
    };
    const [stateForm, setStateForm] = useState(initStateForm);

    useEffect(() => {
        getAllData();
    }, []);



    /*===================================================================================
    --BEGIN: Call API
    ===================================================================================*/
    const getAllData = async () => {
        try {
            const params = {};
            const response = await booksApi.getAll(params);

            if (response) {
                setRowData(response.data);
            } else {
                toast.error("else getAllData: " + response.Message);
            }
        } catch (error) {
            toast.error("catch getAllData: " + error.message);
        }
    };
    const insertData = async () => {
        try {
            const params = {
                book_name: stateForm.book_name || "",
                book_price: stateForm.book_price || "",
            };
            const response = await booksApi.insert(params);

            if (response) {
                toast.success("Add new successfully");
                setStateModal(initStateModal);
                setStateForm(initStateForm);
                getAllData();
            } else {
                toast.error("else insertData: " + response.Message);
            }
        } catch (error) {
            toast.error("catch insertData: " + error.message);
        }
    };
    const updateData = async () => {
        try {
            const params = {
                book_id: stateForm.idForm || 0,
                book_name: stateForm.book_name || "",
                book_price: stateForm.book_price || "",
            };
            const response = await booksApi.update(params);

            if (response) {
                toast.success("Update successfully");
                setStateModal(initStateModal);
                setStateForm(initStateForm);
                getAllData();
            } else {
                toast.error("else updateData: " + response.Message);
            }
        } catch (error) {
            toast.error("catch updateData: " + error.message);
        }
    };

    const deleteData = async (item) => {
        try {
            const params = {
                book_id: item.book_id || 0,
            };
            const response = await booksApi.delete(params);

            if (response) {
                toast.success("Delete successfully");
                setStateAlert(initStateAlert);
                getAllData();
            } else {
                toast.error("else deleteData: " + response.Message);
            }
        } catch (error) {
            toast.error("catch deleteData: " + error.message);
        }
    }
    /*===================================================================================
    --END: Call API
    ===================================================================================*/


    const handleAddnew = () => {
        setStateModal({
            ...stateModal,
            action: "insert",
            title: "Add new item",
            isShow: true,
        });
    };
    const handleEdit = (item) => {
        setStateModal({
            ...stateModal,
            action: "update",
            title: "Edit item",
            isShow: true,
        });

        if (item) {
            setStateForm({
                idForm: item.book_id || 0,
                book_name: item.book_name || "",
                book_price: item.book_price || "",
            });
        }
    };
    const handleDelete = (item) => {
        setStateAlert({
            ...stateAlert,
            action: "delete",
            title: `Are you sure delete No.${item.book_id}?`,
            isShow: true,
            onSave: () => deleteData(item)
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // setValidated(true);

        if (stateModal.action == "insert") {
            insertData();
        } else if (stateModal.action == "update") {
            updateData();
        }
    };

    return (
        <>
            <div>
                <h1>Book List</h1>
                <Link to="/" className="btn btn-outline-secondary btn-sm">
                    <i className="fa-solid fa-arrow-left-long"></i> Go home page
                </Link>
            </div>
            <br />
            {rowData && rowData.length > 0 && (
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th
                                    style={{
                                        width: "135px",
                                        textAlign: "center",
                                    }}
                                >
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => handleAddnew()}
                                    >
                                        <i className="fa-solid fa-plus"></i> Add
                                        new
                                    </Button>
                                </th>
                                <th className="text-center" width="100px">
                                    No.
                                </th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rowData
                                .sort((a, b) => b.book_id - a.book_id)
                                .map((item) => {
                                    return (
                                        <tr key={item.book_id}>
                                            <td style={{ textAlign: "center" }}>
                                                <ButtonGroup size="sm">
                                                    {/* <Link
                                                        href={`/posts/${item.book_id}`}
                                                        className="btn btn-light btn-sm"
                                                        title="View"
                                                    >
                                                        &nbsp;
                                                        <i className="fa-solid fa-eye"></i>
                                                        &nbsp;
                                                    </Link> */}
                                                    <Button
                                                        variant="light"
                                                        onClick={() =>
                                                            handleEdit(item)
                                                        }
                                                        title="Edit"
                                                    >
                                                        &nbsp;
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                        &nbsp;
                                                    </Button>
                                                    <Button
                                                        variant="light"
                                                        onClick={() =>
                                                            handleDelete(item)
                                                        }
                                                        title="Delete"
                                                    >
                                                        &nbsp;
                                                        <i className="fa-solid fa-trash-can"></i>
                                                        &nbsp;
                                                    </Button>
                                                </ButtonGroup>
                                            </td>
                                            <td className="text-center">
                                                {item.book_id}
                                            </td>
                                            <td>{item.book_name}</td>
                                            <td>{item.book_price}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>

                    {stateModal && (
                        <MyModal stateModal={stateModal}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        value={stateForm.book_name}
                                        onChange={(e) =>
                                            setStateForm({
                                                ...stateForm,
                                                book_name: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder=""
                                        value={stateForm.book_price}
                                        onChange={(e) =>
                                            setStateForm({
                                                ...stateForm,
                                                book_price: e.target.value,
                                            })
                                        }
                                    />
                                </Form.Group>

                                <div className="text-end">
                                    <Button
                                        type="submit"
                                        variant="success"
                                        size="sm"
                                    >
                                        <i className="fa-solid fa-floppy-disk"></i>{" "}
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        </MyModal>
                    )}

                    {stateAlert && <MyAlert stateAlert={stateAlert}></MyAlert>}
                </>
            )}
        </>
    );
}

export default Books;
