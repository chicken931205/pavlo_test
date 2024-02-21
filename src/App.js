import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBadge,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBInputGroup,
  MDBCard,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBSwitch,
} from 'mdb-react-ui-kit';

export default function App() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn onClick={toggleOpen}>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog style={{minWidth:'740px'}}>
          <MDBModalContent style={{width:'740px'}}>
            <MDBModalHeader>
              <div className="d-flex align-items-start bg-body-tertiary mb-3" style={{width: '100%'}}>
                <MDBCol>
                  <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                </MDBCol>
                <MDBCol style={{ display: 'flex', textAlign:'center', justifyContent:'center' }}>
                  <MDBModalTitle style={{fontSize:'24px'}}>Filters
                    <MDBBadge className='ms-1 rounded-circle' color='#2AB7DD'>1</MDBBadge>
                  </MDBModalTitle>
                </MDBCol>
                <MDBCol style={{ display:'flex', justifyContent:'right' }}>
                  <MDBModalTitle style={{ color: '#2AB7DD', fontSize:'20px'}}>Reset</MDBModalTitle>
                </MDBCol>
              </div>
            </MDBModalHeader>
            <MDBModalBody style={{padding:'32px 40px 32px 40px'}}>
              <MDBContainer style={{marginBottom: '30px'}}>
                <h4 className='mb-3' style={{fontSize:'20px', color:'#626262'}}>Price range</h4>
                <div className="d-flex align-items-start bg-body-tertiary mb-2">
                  <MDBInputGroup label='Minimum' textBefore={['$']}>
                    <input className='form-control' type='text' />
                  </MDBInputGroup>
                  -
                  <MDBInputGroup label='Maximum' textBefore={['$']}>
                    <input className='form-control' type='text' />
                  </MDBInputGroup>
                </div>
              </MDBContainer>
              <MDBContainer style={{marginBottom: '30px'}}>
                <h4 className='mb-3' style={{fontSize:'20px', color:'#626262'}}>Bedrooms</h4>
                <MDBContainer>
                  <MDBBtn rounded className='mx-3' color='info'>
                    Any
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-4' color='#E4E4E4' >
                    Studio
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-2' color='#E4E4E4' >
                    1
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-2' color='#E4E4E4' >
                    2
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-2' color='#E4E4E4' >
                    3
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-2' color='#E4E4E4' >
                    4+
                  </MDBBtn>
                </MDBContainer>
              </MDBContainer>
              <MDBContainer  style={{marginBottom: '30px'}}>
                <h4 className='mb-3' style={{fontSize:'20px', color:'#626262'}}>Bedrooms</h4>
                <MDBContainer>
                  <MDBBtn rounded className='mx-3' color='info'>
                    Any
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-2' color='#E4E4E4' >
                    1
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-2' color='#E4E4E4' >
                    2
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-2' color='#E4E4E4' >
                    3
                  </MDBBtn>
                  <MDBBtn rounded outline className='mx-2' color='#E4E4E4' >
                    4+
                  </MDBBtn>
                </MDBContainer>
                
              </MDBContainer>
              <MDBContainer  style={{marginBottom: '30px'}}>
                  <h4 className='mb-3' style={{fontSize:'20px', color:'#626262', marginBottom:'30px'}}>Features & Amenities</h4>
                  <div className="d-flex align-items-start bg-body-tertiary mb-3" style={{width: '100%'}}>
                    <MDBCard>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                      <MDBCardText>Bike Room</MDBCardText>
                    </MDBCard>
                    <MDBCard>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                      <MDBCardText>Bike Room</MDBCardText>
                    </MDBCard>
                    <MDBCard>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                      <MDBCardText>Bike Room</MDBCardText>
                    </MDBCard>
                  </div>
                  <div className="d-flex align-items-start bg-body-tertiary mb-3" style={{width: '100%'}}>
                    <MDBCard>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                      <MDBCardText>Bike Room</MDBCardText>
                    </MDBCard>
                    <MDBCard>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                      <MDBCardText>Bike Room</MDBCardText>
                    </MDBCard>
                    <MDBCard>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                      <MDBCardText>Bike Room</MDBCardText>
                    </MDBCard>
                  </div>
                    <a className='mb-3' style={{fontSize:'20px', color:'black'}}>+ Show More</a>
                </MDBContainer>
                
                <MDBContainer>
                  <h4 className='mb-3' style={{fontSize:'20px', color:'#626262'}}>Additional</h4>
                  <MDBRow>
                    <MDBCol className='col-9'>
                      <h4 className='mb-3' style={{fontSize:'18px', color:'#222222'}}>Instant Move-In</h4>
                      <p style={{fontSize:'16px', color:'#222222'}}>Listings you can book without waiting for Host approval </p>
                    </MDBCol>
                    <MDBCol className='col-3' end style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', paddingBottom:'40px'}}>
                      <MDBSwitch id='flexSwitchCheckDefault'></MDBSwitch>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className='col-9'>
                      <h4 className='mb-3' style={{fontSize:'18px', color:'#222222'}}>Pet-Friendly</h4>
                      <p style={{fontSize:'16px', color:'#222222'}}>Listings you can book without waiting for Host approval </p>
                    </MDBCol>
                    <MDBCol className='col-3' end style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', paddingBottom:'40px'}}>
                      <MDBSwitch id='flexSwitchCheckDefault'></MDBSwitch>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className='col-9'>
                      <h4 className='mb-3' style={{fontSize:'18px', color:'#222222'}}>Special Offers</h4>
                      <p style={{fontSize:'16px', color:'#222222'}}>Listings you can book without waiting for Host approval </p>
                    </MDBCol>
                    <MDBCol className='col-3' end style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', paddingBottom:'40px'}}>
                      <MDBSwitch id='flexSwitchCheckDefault'></MDBSwitch>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='info'>Show 999 Rentals</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}