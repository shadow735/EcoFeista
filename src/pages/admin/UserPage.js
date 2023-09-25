import React, { useState, useEffect } from 'react';
import '../../css/UserPage.css'
function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API when the component mounts
    fetch('http://localhost:8000/user')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="user-page">
      <h2>User Records</h2>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Full Name</th>
              <th>Contact No</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.fullName}</td>
                <td>{user.contactNo}</td>
                <td>
                  <a href={`mailto:${user.emailAddress}`}>{user.emailAddress}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPage;
