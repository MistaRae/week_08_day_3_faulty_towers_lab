import {deleteBooking } from "../services/BookingsServices"
import {checkIn} from "../services/BookingsServices"

const Booking = ({booking }) => {

    // const handleClick = (event) => {
    //     removeBooking

    // }

    return (
        <div id="booking">
            <h1>{booking.name}</h1>
            <p>{booking.email}</p>
            <label for="checked">Checked in:</label>
            <input type="checkbox" checked={booking.checked_in} name="checked"/>
            <input onClick = {()=>deleteBooking(booking._id)} type="button" value="DELETE"/>
            {/* check button thing = {() =>checkin(booking._id)} */}
        </div>

    )
}

export default Booking;

// buddy ? 
//         <img src={buddy.images.small} alt={buddy.name} /> : 
//         <p>Choose some Pokemon to join you on your journey!</p>

// https://i.pinimg.com/originals/14/ee/b0/14eeb099f80b3a4159f31f875b8bc324.gif

// https://media1.tenor.com/images/a5fe45988180d25ac3efa32f53bca743/tenor.gifremoveBooking