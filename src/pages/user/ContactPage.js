import React, { useState } from "react";
import axios from "axios";
import '../../css/ContactPage.css'; // Import your CSS file here

function Contact({ onContactSubmit }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Define a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      fullname,
      email,
      phone,
      message,
    };

    await createContact(newContact);

    // Reset form fields
    setFullname('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const createContact = async (newContact) => {
    try {
      // Send the form data to the server
      const response = await axios.post("http://localhost:8000/contact/create", newContact);

      // Handle the response
      window.alert('Message Submitted', response.data);

      // You can also invoke a callback function if needed
      if (onContactSubmit) {
        onContactSubmit(response.data);
      }
    } catch (error) {
      window.alert("Error submitting form:", error);
      // You can also display an error message to the user here
    }
  };

  return (
    <div>
      <head>
        {/* Link to Font Awesome CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha384-rREp4zBpF1jB2jzEPlT9z/ZyAdcpwZfdCGw5H0fzXvRYD5pG5jtn9OMs5F5W5Zt5w"
          crossOrigin="anonymous"
        />
      </head>
      <section className="contact">
        <div className="content">
          <h2><strong>CONTACT US</strong></h2>
          <p>You can contact us from here. Join with us for this noble cause.</p>
        </div>
        <div className="container-contact">
          <div className="contact-info">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>4671 Sugar Camp Road, Chakala, Andheri, 400096</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>9898-5555-6458</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>ecofiestafinds@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  name="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="inputBox">
                <input
                  type="tel"
                  name="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Phone"
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Message"
                />
              </div>
              <div className="inputBox">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
