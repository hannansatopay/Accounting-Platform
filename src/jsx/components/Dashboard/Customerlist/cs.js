import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog1 from './Dropdownblog1';

const Customerlist = () => {
	
  const data = {
    columns: [
		{label: <div className="sorting_1 p-0 text-center">
					<div className="custom-control custom-checkbox ml-2">
						<input type="checkbox" className="custom-control-input" id="checkAll" required="" />	
						<label className="custom-control-label" htmlFor="checkAll"></label>						
					</div>
				</div>
		, field: 'check', },
		{label: 'Order ID', field: 'id', sort: 'asc',  width: 100},
		{label: 'date', field: 'date',   sort: 'asc', },
		{label: 'Customer Name', field: 'customer',	sort: 'asc', 	},
		{label: 'Location', field: 'location', sort: 'asc', 	},
		{label: 'Total Spent', field: 'amount', sort: 'asc', 	},
		{label: 'Last Order', field: 'status',  sort: 'asc',	},
		{label: 'Action', field: 'dropdown',sort: 'asc',	},
    ],	
    rows: [
		{	check: <div className="sorting_1 p-0 text-center">
						<div className="custom-control custom-checkbox ml-2">
							<input type="checkbox" className="custom-control-input" id="customCheckBox66" required="" />	
							<label className="custom-control-label" htmlFor="customCheckBox66"></label>						
						</div>
					</div>,
			id: '#5552311',	date: '26 March 2020 ',	customer: 'David Horison',	location: '11 Church Road',	amount: '$164.52',
			status: <Link to ={"#"} className="btn bgl-light text-black btn-sm">$14.89</Link>,
			dropdown: <Dropdownblog1 />,
		},
		
		
		
		
		
		
		
		
		
	]
};

	return (
		<Fragment>
			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard customer-list-table">		
							<MDBDataTable  striped 	small	data={data}	/>	
						</div>
					</div>
				</div>	
			</div>
		</Fragment>		
	);
}
export default Customerlist;