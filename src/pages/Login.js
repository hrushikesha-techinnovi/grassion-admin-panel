import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column bg-info w-25 h-50 p-5 position-fixed shadow-lg rounded' style={{left: '50%', translate: '-50% -50%', top: '50%',}}>
    <h4 className='top-0 mb-4'>LOGIN</h4>
      <Form className='w-100'>
      <FormGroup>
        <Label for="email">Email :</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password :</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" />
      </FormGroup>
      <Button type='submit' className='mt-3 bg-success'>Submit</Button>
    </Form>
    </div>
  )
}

export default Login