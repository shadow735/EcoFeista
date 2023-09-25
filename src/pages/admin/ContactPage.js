import React, { useState, useEffect } from 'react';
import '../../css/ContactPages.css'; // Import your CSS file for styling

function ContactPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contact data from the API when the component mounts
    fetch('http://localhost:8000/contacts')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="contact-page">
      <h2>Contact Records</h2>
      <div className="contact-table-container">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.fullname}</td>
                <td>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </td>
                <td>{contact.phone}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactPage;
