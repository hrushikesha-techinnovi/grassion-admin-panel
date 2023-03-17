import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Table } from 'reactstrap';
import axios from 'axios';
import "../../assets/styles/layout.css"

const EventList = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios({
      method:"get",
      url :"http://ec2-65-1-232-219.ap-south-1.compute.amazonaws.com:5200/1.0/WEB/EVENTS/LIST",
      headers:{
        Authorization : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzNjUyY2ZlOTcwNjQ1YTRmNWRlYjUiLCJuYW1lIjoiTXVrdGkgQWRtaW4iLCJlbWFpbCI6Im11a3RpYWRtaW5AZ21haWwuY29tIiwibW9iaWxlIjoiOTg3NjU0MzIxMCIsInVzZXJUeXBlIjoiYWRtaW4iLCJjcmVhdGVkT24iOiIyMDIyLTAzLTE3VDE2OjQzOjE5LjMzMVoiLCJtb2RpZmllZE9uIjoiMjAyMi0wMy0xN1QxNjo0MzoxOS4zMzFaIiwiaXNBY3RpdmUiOnRydWUsImlhdCI6MTY3NzgyNDU1Mn0.P8aH4CSS8Fmaf1NwFOVleTtgwPL9roWr3XI-lP4p6R5extFoVbHMFeCQ3v6j3qbgn0uycbCgCrahunomcnxkfLfXu4RiBwAleXOLhre1bfaZKYcq2iTbfbwGUlr5tMt66QunHdv_mVWCLg-OnYB-nVii4-6LIq_Ju5HaKvI51fg"
      }
    }).then(response=>{
      console.log(response.data)
      setTableData(() => {
        return response.data.resultObj;
      });
    })
  },[]);

  return (
    <div style={{}}>
    <Row>
    <Col>
    <Card className='border-0'>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Event List
          </CardTitle>
          <CardBody>
    <Table striped className='border'>
      <thead>
        <tr>
          {/* <th>#</th> */}
          {/* <th>Time</th> */}
          <th>EventName</th>
          <th>Performer</th>
          <th>Date</th>
          <th>Description</th>
          <th>Price</th>
          {/* <th>Image</th> */}
          <th>Address</th>
          {/* <th>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {tableData.length > 0 &&
        tableData.map((item) => {
          return (
            <tr>
              <td>{item.eventName}</td>
              <td>{item.performer}</td>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              {/* <td>{item.eventImg}</td> */}
              <td>{item.address}</td>
            </tr>
          )
        })
        }
        {/* <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
    </CardBody>
    </Card>
    </Col>
    </Row>
    </div>
  );
}

export default EventList;