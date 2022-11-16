import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactContainer = () => {

    const defaultContact = new Contact('Alan', 'Iberra', 'aeiberra@gmail.com', true);

    const [contact, setContact] = useState(defaultContact);

    const toggleOnline = () => {
        setContact({...contact, online: !contact.online});
    }

    return (
        <div>
            <h1>Contact:</h1>
            <ContactComponent contactData={contact} toggleOnline={toggleOnline} />
        </div>
    );
};

export default ContactContainer;
