import React from 'react';

import './BookingPage.scss';

function BookingPage() {
    return <>
        <div class='booking-wrapper'>
            <iframe
                id='iframe-booking'
                class='frame'
                src='https://www.massagebook.com/biz/BodyByDarby#services'
                allowFullScreen=""
                title="booking"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </>
}

export default BookingPage;