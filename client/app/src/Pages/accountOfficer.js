import React from 'react'; 

import Card from 'react-bootstrap/Card'
import './App.css';
// import TestChart from '../components/MapChart.js';


function Officer() {
  return (
    <>
      {/* <TestChart/>
      <div className='m-3  p-4 shadow'>
        <h4>Account Officer</h4>
      </div> */}

      <div className='row p-4 my-3'>
        <Card style={{ width: '18rem' }} className='m-3 shadow col'>
          <Card.Body>
            <Card.Title>AUM</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text>
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='m-3 shadow btn col'>
          <Card.Body>
            <Card.Title>Account Mapped</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text>
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='m-3 shadow col'>
          <Card.Body>
            <Card.Title>Mapped employers</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text>
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </div>

      {/* <div className='row mapped-accounts'>
        <div className='new-mapped-account col-3'>
          <Card style={{ width: '20rem', height: 'auto' }} className='btn shadow-sm'>
            <div className='d-flex align-items-center'>
              <div className='mr-3'>
                  <img src='./images/new-user.png' alt='Add account' className='map-img' />
              </div>
              <div className='w-4 m-2 px-4'>
                  <h3>2000</h3>
                  <h6>New Accounts</h6>
              </div>
            </div>
          </Card>
        </div>

        <div className='mapped-old-account col-3'>
          <Card style={{ width: '20rem', height: 'auto' }} className='btn shadow-sm'>
            <div className='d-flex align-items-center'>
              <div className='mr-3'>
                  <img src='./images/old-user.png' alt='Add account' className='map-img' />
              </div>
              <div className='w-4 m-2 px-4'>
                  <h3>1000</h3>
                  <h6>Old Accounts</h6>
              </div>
            </div>  
          </Card>
        </div>
      </div> */}

      {/* <div style={{ width: '400px' }} >
      <canvas id="AccountChart" width="400" height="200"></canvas>
      </div> */}
    </>
  )
}

export default Officer;