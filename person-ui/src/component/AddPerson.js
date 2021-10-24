import { React, useState } from 'react'
import Button from '@material-ui/core/Button';
import FormDialog from './FormDialog';

const AddPerson = () => {

    const defaultPersonData = { name: "", age: "", contactNumber: "", address: "", pinCode: "" };
    const [formData, setFormData] = useState(defaultPersonData);

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
        </div>
    )
}

export default AddPerson;
