import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";


const AddTip = () => {
  const [formValue, setFormvalue] = useState({
    title: "",
    content: "",
    date: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormvalue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  let file
  const onFileChange = (e)=>{
    e.preventDefault();
    file = e.target.files[0];
    console.log(file)
    // formData.append('tipImage', file)
  }

  const handleSubmit =  (e) => {
    e.preventDefault(); 
    let formData = new FormData();
    formData.append("title", formValue.title);
    formData.append("content", formValue.content);
    formData.append("date", formValue.date);
    if(file){
      formData.append('tipImage', file)
    }else{
      alert('please select a file')
    }

   axios({
    method: "post",
    url: "http://ec2-65-1-232-219.ap-south-1.compute.amazonaws.com:5200/1.0/ANDROID/TIP/ADD",
    data: formData,
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

  };
  return (
    <div>
      <Row>
        <Col>
          <Card className="border-0">
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Add Tip
            </CardTitle>
            {/* <p className="text-success"> { message } </p> */}
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="title">Title :</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                    value={formValue.title}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="content">Content :</Label>
                  <Input
                    type="textarea"
                    name="content"
                    id="content"
                    placeholder="content"
                    value={formValue.content}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="date">Date :</Label>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    value={formValue.date}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="image">Image :</Label>
                  <Input
                    type="file"
                    name="image"
                    accept="image/*"
                    id="image"
                    onChange={onFileChange}
                  />
                  {/* <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText> */}
                </FormGroup>
                <Button type="submit" className="bg-primary border-0">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddTip;
