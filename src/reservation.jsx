import axios  from "axios";
import { useState } from "react";
import "./reserve.css"

function Reservation() {
    const  bot_api = "8391719005:AAFX7ovZHngK8mHqodgFnlqb0ruFw41dsQI"
    const tg_api = `https://api.telegram.org/bot${bot_api}/sendMessage`
    const [text,setText] = useState("Reserve Now")

    const handleSubmit = (e) => {
        e.preventDefault();
        

        const form = new FormData(e.target)

        const data = (Object.fromEntries(form.entries()));
        const sentToHot = `Name: ${data.fullName},\nEmail: ${data.email},\nPhone_Number: ${data.phone},\nCheck In Date: ${data.checkin},\nCheck Out Date: ${data.checkout},\nRoom Type: ${data.roomType}`

        const body = {
                    "chat_id": "5084777241",
                    "text": sentToHot
                    }
        const config = {
            "Content-Type": "application/json"
        }
            
        axios.post(tg_api,body,config)
        .then((response) => {
            console.log(response)
            setText("We will get back to you as soon as possible")
            alert("Reservation Done We will get back to you soon")
        })
        .catch((err) => {
            console.log(err)
        })




    }


    return(
        <>
    <form onSubmit = {(e) => handleSubmit(e)}   class="reservation-form" action="/submit-reservation" method="POST">
        <h2>Hotel Reservation</h2>

    <label for="fullName">Full Name</label>
    <input type="text" id="fullName" name="fullName" required/>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required/>

    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone" required/>

    <label for="checkin">Check-in Date</label>
    <input type="date" id="checkin" name="checkin" required/>

    <label for="checkout">Check-out Date</label>
    <input type="date" id="checkout" name="checkout" required/>

    <label for="roomType">Room Type</label>
    <select id="roomType" name="roomType" required>
      <option value="">Select a room</option>
      <option value="single">Single</option>
      <option value="double">Double</option>
      <option value="suite">Suite</option>
    </select>

    <button type="submit">{text}</button>
    </form>

        
    </>
)
}



export default Reservation;