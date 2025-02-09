import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function SignUpSeller({onBackToLogin}) {
  return (
	<MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '800px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Sign Up as a Seller</h2>
              <p className="text-white-50 mb-5">Please fill out the fields with your information:</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100 user-input' labelClass='text-white' label='Store Name' id='formControlLg' type='name' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100 user-input' labelClass='text-white' label='Store Address' id='formControlLg' type='address' size="lg"/>
			<MDBRow className='mb-4 mx-5 w-100' style={{ marginBottom: '0' }}>
				<MDBCol size='6' style={{ paddingRight: '5px' }}>
					<MDBInput 
					wrapperClass='mb-2 user-input' /* Reduced margin-bottom here */
					labelClass='text-white' 
					label='Opening Hour' 
					id='openingHour' 
					type='number' 
					size="sm"
					min="0"
					max="23"
					style={{ width: '100%' }}
					/>
				</MDBCol>
				<MDBCol size='6' style={{ paddingLeft: '5px' }}>
					<MDBInput 
					wrapperClass='mb-2 user-input' /* Reduced margin-bottom here */
					labelClass='text-white' 
					label='Closing Hour' 
					id='closingHour' 
					type='number' 
					size="sm"
					min="0"
					max="23"
					style={{ width: '100%' }}
					/>
				</MDBCol>
				</MDBRow>            
			  <MDBInput wrapperClass='mb-4 mx-5 w-100 user-input' labelClass='text-white' label='Username' id='formControlLg' type='username' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100 user-input' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100 user-input' labelClass='text-white' label='Repeat Password' id='formControlLg' type='password' size="lg"/>


              <MDBRow className='justify-content-center'>
				<MDBCol size='auto'>
					<MDBBtn outline className='mx-2 px-5 hover-overlay hover-light custom-btn' color='white' size='lg'>
					Sign Up for ShelfSaver
					</MDBBtn>
				</MDBCol>
			  </MDBRow>

			<MDBRow className = 'justify-content-center'>
				<MDBBtn onClick={onBackToLogin} className='w-100 mb-4 mt-2 mx-2 px-5 hover-overlay hover-light custom-btn' color='white' size='sm'>
					Back to Login
				</MDBBtn>
			</MDBRow>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default SignUpSeller;