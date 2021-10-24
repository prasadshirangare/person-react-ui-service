import { React } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({ open, handleClose, data, onChange }) {

    const personURL = 'http://localhost:9001/person';

    const savePerson = () => {
        console.log(data)
        fetch(personURL, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json())
            .then(r => console.log(r))
            .then(r => {
                handleClose()
            })
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Person</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            autoFocus
                            margin="dense"
                            placeholder='Enter name'
                            id="name"
                            label="Name"
                            value={data ? data.name : ''}
                            onChange={e => { onChange(e) }}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            margin="dense"
                            placeholder='Enter age'
                            id="age"
                            label="Age"
                            value={data ? data.age : ''}
                            onChange={e => { onChange(e) }}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            margin="dense"
                            placeholder='Enter contact number'
                            id="contactNumber"
                            label="Contact Number"
                            value={data ? data.contactNumber : ''}
                            onChange={e => { onChange(e) }}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            margin="dense"
                            placeholder='Enter address'
                            id="address"
                            label="Address"
                            value={data ? data.address : ''}
                            onChange={e => { onChange(e) }}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            margin="dense"
                            placeholder='Enter pin code'
                            id="pinCode"
                            label="ZIP"
                            value={data ? data.pinCode : ''}
                            onChange={e => { onChange(e) }}
                            fullWidth
                            variant="outlined"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={savePerson} color="primary" variant="contained">Save</Button>
                    <Button onClick={handleClose} color="secondary" variant="outlined">Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}