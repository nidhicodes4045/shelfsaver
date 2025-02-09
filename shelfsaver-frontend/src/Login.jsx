import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import SignUpBuyer from './SignUpBuyer';
import SignUpSeller from './SignUpSeller';

function Login() {
	const [showSignUpBuyer, setShowSignUpBuyer] = useState(false);
	const [showSignUpSeller, setShowSignUpSeller] = useState(false);

	if (showSignUpBuyer) {
  		return <SignUpBuyer onBackToLogin={() => setShowSignUpBuyer(false)} />;
	}
	if (showSignUpSeller) {
 		return <SignUpSeller onBackToLogin={() => setShowSignUpSeller(false)} />;
	}


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '800px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Welcome to Shelf Saver!</h2>
              <p className="text-white-50 mb-5">Please enter your username and password:</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100 user-input' labelClass='text-white' label='Username' id='formControlLg' type='username' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100 user-input' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <MDBRow className='justify-content-center'>
				<MDBCol size='auto'>
					<MDBBtn outline className='mx-2 px-5 hover-overlay hover-light custom-btn' color='white' size='lg'>
					Login
					</MDBBtn>
				</MDBCol>
			  </MDBRow>
				<br></br><br></br>

              <div>
				<p className="mb-2">Don&#39;t have an account? Sign up as a:</p>
				<MDBRow className='justify-content-center'>
					<MDBCol size='auto'>
					<MDBBtn 
						outline 
						className='mx-2 px-5 hover-overlay hover-light custom-btn' 
						color='white' 
						size='sm'
						onClick={() => setShowSignUpBuyer(true)}
					>
						Buyer
					</MDBBtn>
					</MDBCol>
					<MDBCol size='auto'>
					<MDBBtn 
						outline 
						className='mx-2 px-5 hover-overlay hover-light custom-btn' 
						color='white' 
						size='sm'
						onClick={() => setShowSignUpSeller(true)}
					>
						Seller
					</MDBBtn>
					</MDBCol>
				</MDBRow>
				</div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;
