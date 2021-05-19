import Booking from "./Booking"
const BookingsList = ({allBookings}) => {

    const bookingNodes = allBookings.map((booking) => {
        return <Booking 
        booking={booking} 
        key = {booking._id} 
        // removeBooking={removeBooking}
        />
    })
    
    return (
        <div>
            <h2>BOOKINGS</h2>
            {bookingNodes}
        </div>
    )
}

export default BookingsList;