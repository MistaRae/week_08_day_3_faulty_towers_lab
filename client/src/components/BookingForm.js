import {useState} from 'react';
import {postBookings} from "../services/BookingsServices";

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({})

    const handleChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postBookings(formData).then(data => addBooking(data))
    }

    return (
        <div id = "form-container">
            <form onSubmit={handleSubmit} id = "form-style">
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" id = "name" required/>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="email" name="email" id="email" required/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default BookingForm;