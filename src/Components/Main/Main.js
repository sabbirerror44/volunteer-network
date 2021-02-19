import React from 'react';
import "./Main.css"
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import fakeData from '../../fakeData/fakeData';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Main = () => {
    const handleClick = (id) =>{
        console.log(id);
    }
    return (
       
        <>
         <Header></Header>
         <div className="d-flex justify-content-center align-items-center my-4">
                <h4>I GROW BY HELPING PEOPLE IN NEED.</h4>
            </div>
            <div className='searchBar m-auto d-flex'>
                <input className="inputStyle p-3" type="text" placeholder="Search..." name="" id=""/>
                <Button className="buttonStyle" variant="primary">Search</Button>
            </div>
        <Row className="m-4 p-4">
        {
                 fakeData.map(data=><>
                   <Col className="py-2" xs={12} sm={6} md={4} lg={3} xl={3}>
            
                   <Link to={`/main/${data.id}`}><Card>
                       <Card.Body style={{background: `url('${data.url}')`, backgroundSize: '100% 100%'}}>
   
                       </Card.Body>
                       <Card.Footer style={{backgroundColor: `${data.color}`}}>
                         <p className="text-white text-center">{data.name}</p>
                       </Card.Footer>
                   </Card>
                   </Link>
             
               </Col>
         </>
                    
                )
             }
        </Row>
        </>
    );
};

export default Main;