import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contactData, toggleOnline }) => {
    return (
        <div>
            <h2>
                Name: { contactData.name + ' ' + contactData.lastName }
            </h2>
            <h3>
                Email: { contactData.email }
            </h3>
            <h4>
                {contactData.online ? 'Online Contact' : 'Contact Not Avaliable' }
            </h4>
            <button onClick={toggleOnline}>Change Status</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contactData: PropTypes.instanceOf(Contact),
    toggleOnline: PropTypes.func,
};


export default ContactComponent;
