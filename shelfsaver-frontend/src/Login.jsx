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
import { ItemForm } from './components/Item';
import './App.css'
import User from './components/User';

function Login() {
	const [showSignUpBuyer, setShowSignUpBuyer] = useState(false);
	const [showSignUpSeller, setShowSignUpSeller] = useState(false);
	const [showAddItem, setShowAddItem] = useState(false);
	const [showUser, setShowUser] = useState(false);



	if (showSignUpBuyer) {
  		return <SignUpBuyer onBackToLogin={() => setShowSignUpBuyer(false)} />;
	}
	if (showSignUpSeller) {
 		return <SignUpSeller onBackToLogin={() => setShowSignUpSeller(false)} />;
	}
	if (showAddItem) {
		return <><h3 className='glowing-text'>&lt;ShelfSaver&gt;</h3>
      <img src='src/assets/wizard.png' height={300}></img>
      <ItemForm/></>
	}
	if (showUser) {
		return <User/>
	}


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '800px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

			  <h1 className='glowing-text'>&lt;Welcome to ShelfSaver!&gt;</h1>
              <p className="text-white-50 mb-5 directions">Please enter your username and password:</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-55 user-input custom-input-width' labelClass='text-white textbox-label' label='Username' id='formControlLg' type='username' size="lg"/>
			  <MDBInput wrapperClass='mb-4 mx-5 w-100 user-input custom-input-width' labelClass='text-white textbox-label' label='Password' id='formControlLg' type='password' size="lg"/>
				<MDBRow>
				<MDBCol size='auto'>
				<MDBBtn outline className='mx-5 mb-4 px-5 hover-overlay hover-light custom-btn medium-btn' color='white' size='lg' onClick={() => setShowAddItem(true)}>
					Login as Seller
			  	</MDBBtn>
				</MDBCol>
				<MDBCol size='auto'>
				<MDBBtn outline className='mx-5 mb-4 px-5 hover-overlay hover-light custom-btn medium-btn' color='white' size='lg' onClick={() => setShowUser(true)}>
					Login as Buyer
			  	</MDBBtn>
				</MDBCol>
				</MDBRow>

              <div className="mt-4">
				<p style={{ marginTop: 0, paddingTop: 0 }} className="mb-0 directions no-margin">Don&#39;t have an account? Sign up as a:</p>
				<MDBRow style={{ marginTop: 0, paddingTop: 0 }} className='justify-content-center mt-[-100px] no-margin'>
					<MDBCol size='auto'>
					<MDBBtn 
						outline 
						className='mx-2 px-5 hover-overlay hover-light custom-btn medium-btn' 
						color='white' 
						size='md'
						onClick={() => setShowSignUpBuyer(true)}
					>
						Buyer
					</MDBBtn>
					</MDBCol>
					<MDBCol size='auto'>
					<MDBBtn 
						outline 
						className='mx-2 px-5 hover-overlay hover-light custom-btn medium-btn' 
						color='white' 
						size='md'
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
