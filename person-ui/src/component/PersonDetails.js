import { React, useState, useEffect } from 'react'
import { AgGridReact, setGridApi } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const ShowPerson = () => {

    const getPersonURL = 'http://localhost:9001/person';

    const [personData, setPersonData] = useState(null);
    const [gridApi, setGridApi] = useState(null);

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

    return (
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
    );
};

export default ShowPerson;
