import {useState, useEffect} from 'react';
import BookingForm from '../components/BookingForm.js';
import BookingsList from '../components/BookingsList.js';
import {getBookings, deleteBookings} from "../services/BookingsServices"


const BookingsContainer = () => {

    const [allBookings, setAllBookings] = useState(null)

    useEffect (() => {
        getBookings()
        .then(data => setAllBookings(data))
    },[allBookings])

    const addBooking = (booking) => {
        const temp = allBookings.map (data => data);
        temp.push(booking);
        setAllBookings(temp)
    }

    return (
        <div>
            <BookingForm addBooking = {addBooking}/>

           {allBookings ? 
           <BookingsList 
           allBookings = {allBookings}/> 
           : <h1>Loading...</h1>}

        </div>
    )
}

export default BookingsContainer;