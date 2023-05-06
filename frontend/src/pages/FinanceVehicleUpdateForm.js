import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/sudul/FlightUpdateForm.css';

function FinanceVehicleUpdateForm() {
    const [name, setName] = useState('');
    const [fee, setFee] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();
  
    const getUniqueVehicle = () => {   
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/vehicles/`+ id)
            .then((res) => {
                setName(res.data.driverName);
                setFee(res.data.fee);
                
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { getUniqueVehicle() }, []);

    return (
        <div className='FlightUpdateFormMainCont'>
            <h1>Update Vehicle Financial Details</h1>
            <div className="FlightUpdateFormCont">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const newVehicle = {
                        fee
                    }
                    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/vehicles/update/` + id, newVehicle).then(() => {
                        alert("Vehicle Updated");
                        navigate("/financeDashboard/pending/taxi");
                    }).catch((err) => {
                        alert(err);
                    })
                }}>



                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name}  readOnly/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Fee per KiloMetre</label>
                        <input type="text" className="form-control" value={fee} pattern = "[0-9]{3,}" onChange={(e) => { setFee(e.target.value) }} required/>
                    </div>
                    <br />
                    <button type="submit" className="submitbtn">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default FinanceVehicleUpdateForm;