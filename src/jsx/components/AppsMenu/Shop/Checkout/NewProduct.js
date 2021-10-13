import React, { Fragment ,useState } from "react";
import { Form } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";
import {db} from "./firebase";

const NewProduct = () => {

   const [pname, setPname] = useState("");
   const [pcategory, setPcategory] = useState("");
   const [psubcategory, setPsubcategory] = useState("");
   const [unit, setUnit] = useState("");
   const [selling, setSelling] = useState("");
   const [gst, setGst] = useState("");
   const [margin, setMargin] = useState("");
   const [remark, setRemarks] = useState("");
   

   const handleSubmit = (e) => {
      e.preventDefault();
      db.collection("products")

         .add({
         pname : pname,
         pcategory : pcategory,
         psubcategory : psubcategory,
         unit : unit,
         selling : selling,
         gst : gst,
         margin : margin,
         remark : remark,
         

         })
         .then(() => {
         alert("submitted");
         })

         .catch((error) => {
            alert(error.message);

         });
      setPname("");
      setPcategory("");
      setPsubcategory("");
      setUnit("");
      setSelling("");
      setGst("");
      setMargin("");
      setRemarks("");
     

   };


   return (
      <Fragment>
         <PageTitle headingPara="Your business dashboard template" activeMenu="Checkout" motherMenu="Shop" />

         <div className="row">
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-4 order-md-2 mb-4">

                           
                        </div>
                        <div className="col-md-8 order-md-1">
                           <h4 className="mb-3">Add New Product</h4>
                           <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
                              <div className="row">
                              <div className="col-md-6 mb-3">
                                    <label htmlFor="productid">Product Id</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder=""
                                       required
                                    />
                              </div>

                              <div className="col-md-6 mb-3">

                                    <label htmlFor="productname">Product Name</label>

                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder=""
                                       required
                                       value = {pname}
                                       onChange={(e) => setPname(e.target.value)}
                                    />

                              </div>

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="category">
                                       Product Category
                                    </label>

                                    <input
                                       type="text"
                                       className="form-control"
                                       
                                       value = {pcategory}
                                       onChange={(e) => setPcategory(e.target.value)}
                                       placeholder=""
                                       required
                                    />


                                 </div>

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="subcategory">Product SubCategory</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       
                                       value = {psubcategory}
                                       onChange={(e) => setPsubcategory(e.target.value)}
                                       placeholder=""
                                       required
                                    />

                                 </div>

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="units">Unit of Measurement</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       
                                       value = {unit}
                                       onChange={(e) => setUnit(e.target.value)}
                                       placeholder=""
                                       required
                                    />

                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="sellingprice"> Selling Price</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       
                                       value = {selling}
                                       onChange={(e) => setSelling(e.target.value)}
                                       placeholder=""
                                       required
                                    />

                                 </div>

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="gst"> GST Rate</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                      
                                       value = {gst}
                                       onChange={(e) => setGst(e.target.value)}
                                       placeholder=""
                                       required
                                    />

                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="margin"> Margin %</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                   
                                       value = {margin}
                                       onChange={(e) => setMargin(e.target.value)}
                                       placeholder=""
                                       required
                                    />

                                 </div>

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="remarks"> Other Remarks</label>

                                    <input
                                       type="text"
                                       className="form-control"
                                       value = {remark}
                                       onChange={(e) => setRemarks(e.target.value)}
                                       placeholder=""
                                       required
                                    />

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

export default NewProduct;
