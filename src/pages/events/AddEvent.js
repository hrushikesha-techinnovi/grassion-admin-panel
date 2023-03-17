import React from 'react';
import { Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


const AddEvent = () => {
  return (
    <div style={{paddingBottom: '20px',}}>
    <Row>
    <Col>
    <Card className='border-0'>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Add Event
          </CardTitle>
          <CardBody>
    <Form>
      <FormGroup>
        <Label for="eventName">EventName :</Label>
        <Input type="text" name="eventName" />
      </FormGroup>
      <FormGroup>
        <Label for="performer">Performer :</Label>
        <Input type="text" name="performer" />
      </FormGroup>
      <FormGroup>
      <Label for="date">Date :</Label>
      <Input type='date' name='date' id='date' />
      </FormGroup>
      <FormGroup>
      <Label for="time">Time :</Label>
      <Input type='time' name='time' id='time' />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description :</Label>
        <Input type="textarea" name="description" />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price :</Label>
        <Input type="number" name="price" />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image :</Label>
        <Input type="file" name="image" id="image" />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address :</Label>
        <Input type="text" name="address" />
      </FormGroup>
      <Button type='submit' className='bg-primary border-0'>Submit</Button>
    </Form>
    </CardBody>
        </Card>
    </Col>
    </Row>
    </div>
  );
}

export default AddEvent;