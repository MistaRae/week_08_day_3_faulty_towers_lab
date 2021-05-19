// const { Db } = require("mongodb");

use faulty_towers;

db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Mark",
        email: "itsamistarae@gmail.com",
        checked_in: false
    }, 
    {
        name: "Holly",
        email: "test@gmail.com",
        checked_in: false
    }, 
    {
        name: "Steven",
        email: "test@gmail.com",
        checked_in: false
    }
]);