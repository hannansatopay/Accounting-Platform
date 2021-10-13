import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog2 from './Dropdownblog2';

const DatatablePstatus = () => {
  const data = {
    columns: [
		{label: 'Order ID', field: 'id', sort: 'asc',  width: 100},
		{label: 'date', field: 'date',   sort: 'asc', },
		{label: 'Customer Name', field: 'customer',	sort: 'asc', 	},
		{label: 'Location', field: 'location', sort: 'asc', 	},
		{label: 'Amount', field: 'amount', sort: 'asc', 	},
		{label: 'Status', field: 'status',  sort: 'asc',	},
		{label: 'Action', field: 'dropdown',sort: 'asc',	},
    ],	
    rows: [
		{	id: '#5552311',	date: '26 March 2020 ',	customer: 'David Horison',	location: '11 Church Road',	amount: '$320',
			status: <Link to={""} className="btn bgl-warning text-warning btn-sm">PENDING</Link>,
			dropdown: <Dropdownblog2 />,
		},
		{
			id: '#5552322',	date: '27 March 2020',	customer: '21 King Street London',location: 'Tokyo', amount: '$170',
			status: <Link to={""} className="btn bgl-light btn-sm">CANCLED</Link>,
			dropdown: <Dropdownblog2 />,
		}
	]
};

	return (
		<Fragment>
			<Link to="/order"><button type="button" class="btn btn-primary">Add Order</button></Link>
			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard">					
							<MDBDataTable  striped 	small	data={data}	/>		
						</div>
					</div>
				</div>	
			</div>
		</Fragment>
					
	);
}
export default DatatablePstatus;