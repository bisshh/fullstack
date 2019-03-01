import React from 'react';

const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}

const user = {
    name: 'Resham',
    lastname: 'Khadka',
    phone: 9849068407
}

const Header = () => {
    return (
            <header>
                <p>This is the Header. Today date is {getYear()}</p>
                <p>My name is {user.name + ' ' + user.lastname} and my phone number is {user.phone}</p>
            </header>
        )
}

export default Header;