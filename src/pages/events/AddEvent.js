import axios from 'axios';
import React, { useState } from 'react';
import { Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


const AddEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    performer: '',
    date: '',
    from: '',
    to: '',
    description: '',
    price: '',
    image: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let file
  const onFileChange = (e)=>{
    e.preventDefault();
    file = e.target.files[0];
    console.log(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    let allFormData = new FormData();
    allFormData.append("eventName", formData.eventName);
    allFormData.append("performer", formData.performer);
    allFormData.append("date", formData.date);
    allFormData.append("from", formData.from);
    allFormData.append("to", formData.to);
    allFormData.append("description", formData.description);
    allFormData.append("price", formData.price);
    if(file){
      allFormData.append('eventImg', file)
    }else{
      alert('please select a file')
    }
    allFormData.append("address", formData.address);

    axios({
      method: "post",
      url: "http://ec2-65-1-232-219.ap-south-1.compute.amazonaws.com:5200/1.0/ANDROID/ADD/EVENT",
      data: allFormData,
      headers: {
        Authorization:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzNjUyY2ZlOTcwNjQ1YTRmNWRlYjUiLCJuYW1lIjoiTXVrdGkgQWRtaW4iLCJlbWFpbCI6Im11a3RpYWRtaW5AZ21haWwuY29tIiwibW9iaWxlIjoiOTg3NjU0MzIxMCIsInVzZXJUeXBlIjoiYWRtaW4iLCJjcmVhdGVkT24iOiIyMDIyLTAzLTE3VDE2OjQzOjE5LjMzMVoiLCJtb2RpZmllZE9uIjoiMjAyMi0wMy0xN1QxNjo0MzoxOS4zMzFaIiwiaXNBY3RpdmUiOnRydWUsImlhdCI6MTY3NzgyNDU1Mn0.P8aH4CSS8Fmaf1NwFOVleTtgwPL9roWr3XI-lP4p6R5extFoVbHMFeCQ3v6j3qbgn0uycbCgCrahunomcnxkfLfXu4RiBwAleXOLhre1bfaZKYcq2iTbfbwGUlr5tMt66QunHdv_mVWCLg-OnYB-nVii4-6LIq_Ju5HaKvI51fg", 
        "Content-Type":"multipart/formdata"
      },
    })
    .then(function (response) {
      console.log(response);
     })
     .catch(function (response) {
      console.log(response);
     })

  }
  return (
    <div style={{paddingBottom: '20px'}}>
    <Row>
    <Col>
    <Card className='border-0 p-2'>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Add Event
          </CardTitle>
          <CardBody>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="eventName">EventName :</Label>
        <Input type="text" name="eventName" value={formData.eventName} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="performer">Performer :</Label>
        <Input type="text" name="performer" value={formData.performer} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
      <Label for="date">Date :</Label>
      <Input type='date' name='date' id='date' value={formData.date} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
      <Label for="time">Time :</Label>
      <span className='d-flex justify-content-between align-items-center gap-5'>
      <Input type='time' name='from' id='time' value={formData.from} onChange={handleChange} style={{width: '50%'}} />
      <Input type='time' name='to' id='time' value={formData.to} onChange={handleChange} style={{width: '50%'}} />
      </span>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description :</Label>
        <Input type="textarea" name="description" value={formData.description} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price :</Label>
        <Input type="number" name="price" value={formData.price} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image :</Label>
        <Input type="file" name="image" id="image" accept="image/*" onChange={onFileChange} />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address :</Label>
        <Input type="text" name="address" value={formData.address} onChange={handleChange} />
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