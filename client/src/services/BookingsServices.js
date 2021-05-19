const baseURL = 'http://localhost:5000/api/bookings/'


export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postBookings = (formData) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

// export const checkIn = (id, event) => {
//    return fetch(baseURL + id, {
//         method: 'PUT',
//         body: JSON.stringify(event),
//         headers: { 'Content-Type': 'application/json' }
//     })
