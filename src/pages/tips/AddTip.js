import React from 'react';
import { Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


const AddTip = () => {
  // const [startDate, setStartDate] = useState(null);
  return (
    <div>
    <Row>
    <Col>
    <Card className='border-0'>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Add Tip
          </CardTitle>
          <CardBody>
    <Form>
      <FormGroup>
        <Label for="title">Title :</Label>
        <Input type="text" name="title" id="title" placeholder="title" />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content :</Label>
        <Input type="textarea" name="content" id="content" placeholder='content' />
      </FormGroup>
      <FormGroup>
      <Label for="date">Date :</Label>
      <Input type='date' name='date' id='date' />
      {/* <Col sm={10}>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy" isClearable showMonthDropdown showYearDropdown scrollableMonthYearDropdown className='border w-100 p-2 rounded'
       />
       </Col> */}
      </FormGroup>
      <FormGroup>
        <Label for="image">Image :</Label>
        <Input type="file" name="image" id="image" />
        {/* <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText> */}
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

export default AddTip;