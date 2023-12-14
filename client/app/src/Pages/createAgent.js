import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavigationType } from 'react-router-dom';

function createAgent() {
  return (
    <Container fluid>

      <Row className='justify-content-center align-items-center m-5'>

        <Card className='w-100'>
          <Card.Body className='px-4'>

            <Card.Title><h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Create Agent</h3></Card.Title>

            <Row>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Agent Code</Form.Label>
                  <Form.Control size='lg' type='Number' />
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Agent Name</Form.Label>
                  <Form.Control size='lg' type='text' />
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control size='lg' type='email' />
                </Form.Group>
              </Col>

            </Row>

            <Row>

              <Col md='4' className='mb-4'>
                <Form.Group>
                  <Form.Label className="">Status</Form.Label>
                  <div>
                    <Form.Check inline label='Is BD' type='radio' name='gender'/>
                    <Form.Check inline label='Is Exited' type='radio' name='gender'/>
                  </div>
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Date Created</Form.Label>
                  <Form.Control size='lg' type='Date' />
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Date Exited</Form.Label>
                  <Form.Control size='lg' type='Date' />
                </Form.Group>
              </Col>

            </Row>

            <Row>
              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Branch Code</Form.Label>
                  <Form.Control size='lg' type='number' />
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Zone Code</Form.Label>
                  <Form.Control size='lg' type='Number' />
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Directorate Code</Form.Label>
                  <Form.Control size='lg' type='number' />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Team Code</Form.Label>
                  <Form.Control size='lg' type='Number' />
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>Role ID</Form.Label>
                  <Form.Control size='lg' type='number' />
                </Form.Group>
              </Col>

              <Col md='4'>
                <Form.Group className='mb-4'>
                  <Form.Label>TeamLead ID</Form.Label>
                  <Form.Control size='lg' type='Number' />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className='mb-4'>
              <Form.Label>Agent Type</Form.Label>
              <Form.Control as='select' size='lg'>
                <option disabled>Choose option</option>
              </Form.Control>
            </Form.Group>

            <Button className='mb-4' size='lg'>Submit</Button>

          </Card.Body>
        </Card>

      </Row>
    </Container>
  );
}

export default createAgent;
