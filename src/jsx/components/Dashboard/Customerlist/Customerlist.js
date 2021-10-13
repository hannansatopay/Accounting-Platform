import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog1 from './Dropdownblog1';
import { useState, useRef } from "react";
import { Table, Pagination } from "react-bootstrap";


import firebase, { db } from '../../AppsMenu/Shop/Checkout/firebase';

class Customerlist extends React.Component{

	constructor(props){
		super(props);
		this.state = {customers : []}
	}

	componentDidMount(){
		db.collection("customers").onSnapshot((querySnapshot) => {
			let customers = [];
			querySnapshot.forEach((doc) => {
				customers.push(doc.data());
			});
			this.setState({customers : customers});
		});
	}

	render(){
		return(
			<div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">All Customers</h4>
            </div>
            <div className="card-body">
               <Table responsive className="w-100">
                  <div id="example_wrapper" className="dataTables_wrapper"></div>
			<table id="example" className="display w-100 dataTable">
                    <thead>
                        <tr role="row">
			
							<th>Customer First Name</th>
							<th>Customer Last Name</th>
							<th>Phone Number</th>
							<th>Email Id</th>
							<th>Location</th>
							<th>Town</th>
							<th>City</th>
							<th>State</th>
							<th>Pincode</th>
						</tr>

					</thead>
				<tbody>
					{this.state.customers.map(data => {
						return(
							<tr>
								<td>{data.fname}</td>
								<td>{data.lname}</td>
								<td>{data.phone}</td>
								<td>{data.email}</td>
								<td>{data.location}</td>
								<td>{data.town}</td>
								<td>{data.city}</td>
								<td>{data.state}</td>
								<td>{data.zipcode}</td>


							</tr>
						);
					})}
				</tbody>
			</table>
			</Table>
		</div>
		</div></div>

		)
	}
}

export default Customerlist;



