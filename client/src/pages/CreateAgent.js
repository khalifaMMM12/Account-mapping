import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function CreateAgent() {
  return (
    <Container fluid>
      <Row className='m-5'>

        <Card className='w-100 shadow p-0'>
            <Card.Header>
              <h3 className="fw-bold">Create Agent</h3>
            </Card.Header>
            
          <Card.Body className='px-4'>
            <Row>
              <Col md='4' className='mb-4'>
                <Form.Group>
                  <Form.Label className="">Agent Type</Form.Label>
                  <div>
                    <Form.Check inline label='BD' type='radio' name='agent'/>
                    <Form.Check inline label='Not BD' type='radio' name='agent'/> 
                    <Form.Check inline label='External' type='radio' name='agent'/> 
                  </div>
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Agent Code</Form.Label>
                  <Form.Control type='Number' />
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Agent Name</Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>


            </Row>

            <Row>

            <Col md='4'>
              <Form.Group className='mb-4'>
                <Form.Label>Directorate</Form.Label>
                <Form.Control as='select' className="form-select">
                  <option disabled>Choose option</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md='4'>
              <Form.Group className='mb-4'>
                <Form.Label>Branch</Form.Label>
                <Form.Control as='select' className="form-select">
                  <option disabled>Choose option</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md='4'>
              <Form.Group className='mb-4'>
                <Form.Label>State</Form.Label>
                <Form.Control as='select' className='form-select'>
                  <option disabled>Choose option</option>
                </Form.Control>
              </Form.Group>
            </Col>

            </Row>

            <Row>

            <Col md='4'>
              <Form.Group className='mb-4'>
                <Form.Label>Zone</Form.Label>
                <Form.Control as='select' className="form-select">
                  <option disabled>Choose option</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md='4'>
              <Form.Group className='mb-4'>
                <Form.Label>Team</Form.Label>
                <Form.Control as='select' className="form-select">
                  <option disabled>Choose option</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md='4'>
              <Form.Group className='mb-4'>
                <Form.Label>Role</Form.Label>
                <Form.Control as='select' className="form-select">
                  <option disabled>Choose option</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md='4'>
              <Form.Group className='mb-4'>
                <Form.Label>TeamLead</Form.Label>
                <Form.Control as='select' className="form-select">
                  <option disabled>Choose option</option>
                </Form.Control>
              </Form.Group>
            </Col>

            </Row>

            <Button className='mb-4' size='lg'>Submit</Button>

          </Card.Body>
        </Card>

      </Row>
    </Container>
  );
}

export default CreateAgent;
