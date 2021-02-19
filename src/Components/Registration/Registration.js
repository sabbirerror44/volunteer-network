import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import "./Registration.css"
import { Link } from 'react-router-dom';

const Registration = () => {
    const {id} = useParams();
    const history = useHistory();
    const category = fakeData.find(domain => domain.id === parseInt(id));
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const newRegistration = {...loggedInUser};
        fetch("http://localhost:5000/addRegistration", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    }

    return (
        <div>
          <div className="container my-4 d-flex justify-content-center align-items-center">
              <img src="https://i.ibb.co/X3M1MM5/Group-1329.png" height="60px" width="203px" alt=""/>
          </div>
          <div className="regStyle m-auto">
                  
                  <h4 className="heading text-center">Register as a Volunteer</h4>

                 
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                  
                      <input name="name" defaultValue={loggedInUser.name} ref={register} />
                   
                   
                    <input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} />
            
                    {errors.email && <span className="error">This field is required</span>}
                    
                    <input name="date" type="date" ref={register({ required: true })}/>
                   
                    {errors.date && <span className="error">This field is required</span>}

                    <input name="description" ref={register({ required: true })} placeholder="Description"/>
                    
                    {errors.description && <span className="error">This field is required</span>}

                    <input name="category" ref={register({ required: true })} defaultValue={category.name}/>
                    
                    {errors.category && <span className="error">This field is required</span>}

                    <Link to={`/reglist/${category.id}`}><input className="btn btn-primary" type="submit" value="Registration" /></Link>

                </form>

          </div>
        </div>
    );
};

export default Registration;