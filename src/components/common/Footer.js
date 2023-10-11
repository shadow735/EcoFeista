import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

function Footer() {
  const adminLinkStyle = {
    position: 'absolute',
    right: '20px', // Adjust the value to your preferred position
    top: '50%',
    transform: 'translateY(-50%)',
  };

  return (
    <MDBFooter className='text-center text-dark' style={{ backgroundColor: '#f1f1f1', position: 'relative' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          {/* Your social media buttons go here */}
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: EcoFeistaFinds
        <a className='text-dark' href='/admin/login' style={adminLinkStyle}>
          Admin
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
