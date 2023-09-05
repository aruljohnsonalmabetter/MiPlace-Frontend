import React from 'react'
import Button from '../components/Button'
import Bookingreceipt from '../components/Bookingreceipt'
import { FaLocationDot } from "react-icons/fa6";
import Rating from '../components/Rating';
function MyBookings() {
  return (
    <div>
        <div class="flex justify-between mx-[3.125rem]  space-x-4 border-solid border-2 border-indigo-600">
            <div>
                <h1>Lemon Tree Premier Pune </h1>
                <Rating/>
                <h3 className='flex'><FaLocationDot/>City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001</h3>
            </div>
            <div>
                <h1>₹ 2349/night</h1>
                <Button
                 text="Download"
                />
            </div>
        </div>
         <Bookingreceipt/>
        <div class="mx-[3.125rem] my-[2.125rem] border-solid border-2 border-red-600">
            <h1 className='mb-[2.125rem] font-semibold font-[Montserrat] '>Terms and Conditions</h1>
            <h2 className='mb-[1rem] font-medium font-[Montserrat]'>Payments</h2>
            <p >
                <li className='mb-[1rem]'>If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes. </li>
                <li className='mb-[1rem]'>If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.</li>
                <li className='mb-[1rem]'>Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.</li>
            </p>
        </div>

        <div class="mx-[3.125rem] border-solid border-2 border-green-600">
            <h1 className='mb-[1rem] font-medium font-[Montserrat]'>Contact Us</h1>
            <h3>If you have any questions about our Website or our Terms of Use, please contact:
            <li class="list-none">Golobe Group Q.C.S.C</li>
            <li class="list-none">Golobe Tower</li>
            <li class="list-none">P.O. Box: 22550</li>
            <li class="list-none">Doha, State of Qatar</li>
            <li class="list-none">Further contact details can be found at Hotel.com</li></h3>
        </div>
    </div>
  )
}

export default MyBookings