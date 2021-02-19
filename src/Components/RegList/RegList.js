import React from 'react';
import "./RegList.css";
import Header from '../Header/Header';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData';


const RegList = () => {
    const {id} = useParams();
    const category = fakeData.find(domain => domain.id === parseInt(id));
    console.log(category.url)
    return (
        <div className="whole">
            <Header></Header>
            <div className="container d-flex m-auto">

            <div className="row my-4">
           
                <div className="col-lg-6 col-md-6 col-sm-12 my-4 ">
                    <div className="listStyle">
                      <img src={category.url} height="173px" width="194px"alt=""/>
                       <div className="p-4 bg-white">
                       <h4 className="bg-white">{category.name}</h4><br/>
                      <h5 className="bg-white">23 Sep, 2021</h5>
                      <button className="btn btn-light">Cancel</button>
                       </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-4 ">
                    <div className="listStyle">
                      <img src={category.url} height="173px" width="194px"alt=""/>
                       <div className="p-4 bg-white">
                       <h4 className="bg-white">{category.name}</h4><br/>
                      <h5 className="bg-white">23 Sep, 2021</h5>
                      <button className="btn btn-light">Cancel</button>
                       </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-4 ">
                    <div className="listStyle">
                      <img src={category.url} height="173px" width="194px"alt=""/>
                       <div className="p-4 bg-white">
                       <h4 className="bg-white">{category.name}</h4><br/>
                      <h5 className="bg-white">23 Sep, 2021</h5>
                      <button className="btn btn-light">Cancel</button>
                       </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-4 ">
                    <div className="listStyle">
                      <img src={category.url} height="173px" width="194px"alt=""/>
                       <div className="p-4 bg-white">
                       <h4 className="bg-white">{category.name}</h4><br/>
                      <h5 className="bg-white">23 Sep, 2021</h5>
                      <button className="btn btn-light">Cancel</button>
                       </div>
                    </div>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-12 my-4 my-4">
                    <div className="listStyle">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur necessitatibus, ratione iure assumenda recusandae nulla aspernatur eius corporis commodi a voluptatibus molestias natus expedita hic iste dolorum fuga minus.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-4 my-4">
                    <div className="listStyle">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur necessitatibus, ratione iure assumenda recusandae nulla aspernatur eius corporis commodi a voluptatibus molestias natus expedita hic iste dolorum fuga minus.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-4 my">
                    <div className="listStyle">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur necessitatibus, ratione iure assumenda recusandae nulla aspernatur eius corporis commodi a voluptatibus molestias natus expedita hic iste dolorum fuga minus.</p>
                    </div>
                </div> */}
                
             </div>
            </div>
        </div>
    );
};

export default RegList;