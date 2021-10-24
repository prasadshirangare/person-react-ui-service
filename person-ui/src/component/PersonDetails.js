import { React, useState, useEffect } from 'react'
import { AgGridReact, setGridApi } from 'ag-grid-react';
import Button from '@material-ui/core/Button';
import FormDialog from './FormDialog';

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const ShowPerson = () => {

    const getPersonURL = 'http://localhost:9001/person';

    const [gridApi, setGridApi] = useState(null);
    const [personData, setPersonData] = useState(null);
    const defaultPersonData = { name: "", age: "", contactNumber: "", address: "", pinCode: "" };
    const [formData, setFormData] = useState(defaultPersonData);
    const [open, setOpen] = useState(false);

    const columnDefs = [
        { headerName: 'ID', field: 'id', },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Age', field: 'age' },
        { headerName: 'Contact', field: 'contactNumber' },
        { headerName: 'Address', field: 'address' },
        { headerName: 'Zip', field: 'pinCode' },
    ];

    useEffect(() => {
        getPersonData()
    }, [])

    const getPersonData = () => {
        fetch(getPersonURL).then(r => r.json())
            .then(r => setPersonData(r))
    }

    const onGridReady = (params) => {
        setGridApi(params);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        getPersonData();
    };

    const onChange = (e) => {
        const { value, id } = e.target
        setFormData({ ...formData, [id]: value })
    }

    return (
        <div>
            <Button variant='contained' color='primary' onClick={handleClickOpen}>
                Add Person
            </Button>
            <FormDialog open={open} handleClose={handleClose} data={formData} onChange={onChange} />
            <div className="ag-theme-alpine" style={{ height: '500px' }}>
                <AgGridReact
                    rowData={personData}
                    defaultColDef={{ flex: 1 }}
                    rowHeight={60}
                    columnDefs={columnDefs}
                    onGridReady={onGridReady}
                    pagination={true}
                    paginationAutoPageSize={true}
                />
            </div>
        </div>
    );
};

export default ShowPerson;
