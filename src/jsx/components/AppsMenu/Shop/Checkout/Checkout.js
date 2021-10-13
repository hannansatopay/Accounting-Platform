import React, { Fragment ,useState } from "react";
import { Form } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";
import {db} from "./firebase";

const Checkout = () => {

   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [location, setLocation] = useState("");
   const [town, setTown] = useState("");
   const [city, setCity] = useState("");
   const [state, setState] = useState("");
   const [zipcode, setZip] = useState("");



   const handleSubmit = (e) => {
      e.preventDefault();
      db.collection("customers")

         .add({
         fname : fname,
         lname : lname,
         phone : phone,
         email : email,
         location : location,
         town : town,
         city : city,
         state : state,
         zipcode : zipcode

         })
         .then(() => {
         alert("submitted");
         })

         .catch((error) => {
            alert(error.message);

         });
      setFname("");
      setLname("");
      setPhone("");
      setEmail("");
      setLocation("");
      setTown("");
      setCity("");
      setState("");
      setZip("");

   };


   return (
      <Fragment>
         <PageTitle headingPara="Your business dashboard template" activeMenu="Checkout" motherMenu="Shop" />

         <div className="row">
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        
                        <div className="col-md-8 order-md-1">
                           <h4 className="mb-3">Customer Info</h4>
                           <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
                              <div className="row">
                              <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Cutomer Id</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder=""
                                       required
                                    />

                                    <div className="invalid-feedback">
                                       Valid last name is required.
                                    </div>
                              </div>

                              <div className="col-md-6 mb-3">

                                    <label htmlFor="lastName">Phone Number</label>

                                    <input type="tel" className="form-control"
                                       pattern="[0-9]{10}"
                                       value = {phone}
                                       onChange={(e) => setPhone(e.target.value)}
                                       required />

                                    <div className="invalid-feedback">
                                       Valid last name is required.
                                    </div>
                              </div>

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">
                                       First name
                                    </label>

                                    <input
                                       type="text"
                                       className="form-control"
                                       id="firstName"
                                       value = {fname}
                                       onChange={(e) => setFname(e.target.value)}
                                       placeholder=""
                                       required
                                    />

                                    <div className="invalid-feedback">
                                       Valid first name is required.
                                    </div>

                                 </div>

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="lastName"
                                       value = {lname}
                                       onChange={(e) => setLname(e.target.value)}
                                       placeholder=""
                                       required
                                    />

                                    <div className="invalid-feedback">
                                       Valid last name is required.
                                    </div>
                                 </div>

                                 
                              </div>

                              

                              <div className="mb-3">
                                 <label htmlFor="username">Email</label>
                                 <div className="input-group">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text">
                                          @
                                       </span>
                                    </div>

                                    <input
                                       type="text"
                                       className="form-control"
                                       id="username"
                                       value = {email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       placeholder=""
                                       required
                                    />

                                    
                                 </div>
                              </div>

                              <div className="mb-3">
                                 <label htmlFor="email">
                                    Address
                                    
                                 </label>

                                 <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value = {location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="location"
                                 />
                                 <div className="invalid-feedback">
                                    Please enter a valid email address for
                                    shipping updates.
                                 </div>
                              </div>

                              <div className="mb-3">
                                 

                                 <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    value = {town}
                                    onChange={(e) => setTown(e.target.value)}
                                    placeholder="town"
                                    required=""
                                 />

                                 <div className="invalid-feedback">
                                    Please enter your shipping address.
                                 </div>
                              </div>

   

                              <div className="row">
                                 <div className="col-md-4 mb-3">
                                    

                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="city"
                                    value = {city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required=""
                                 />

                                    <div className="invalid-feedback">
                                       Please provide a valid state.
                                    </div>
                                 </div>

                                 <div className="col-md-4 mb-3">
                                    
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="state"
                                    value = {state}
                                    onChange={(e) => setState(e.target.value)}
                                    required=""
                                 />

                                    <div className="invalid-feedback">
                                       Please provide a valid state.
                                    </div>
                                 </div>
                                 <div className="col-md-4 mb-3">
                                    
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="zip"
                                       value = {zipcode}
                                       onChange={(e) => setZip(e.target.value)}
                                       
                                       placeholder="zip"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Zip code required.
                                    </div>
                                 </div>
                              </div>
                                                           
                              
                              
                              <hr className="mb-4" />
                              <button
                                 className="btn btn-primary btn-lg btn-block"
                                 type="submit"
                              >
                                 Submit
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Checkout;
