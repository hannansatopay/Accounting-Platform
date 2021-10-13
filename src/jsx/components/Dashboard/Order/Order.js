import React, {Fragment} from 'react';
import Select from "react-select";
import {Link} from 'react-router-dom';
import { MDBDataTable, MDBIcon } from 'mdbreact';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

import {db} from "./firebase.js";

class Order extends React.Component {
	constructor(props){
        super(props);

		this.state = {
            rows: [],
			items: [],
			selectedOption: null,
			customers: [],
			selectedCustomer: null,
			selectedAddress: null,
			rate: '',
			discount: '',
			gst: '',
			// totalAmount: ''
        };
    }

	componentDidMount = () => {
		db.collection("products").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				doc = doc.data();
				this.setState({items: [...this.state.items, {value: doc.item, label: doc.item, rate: doc.rate, discount: doc.discount, gst: doc.gst}] });
			});
		})

		db.collection("customers").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				doc = doc.data();
				this.setState({customers: [...this.state.customers, {value: `${doc.fname} ${doc.lname} (${doc.phone})`, label: `${doc.fname} ${doc.lname} (${doc.phone})`, address: doc.location + ', ' + doc.state + ', ' + doc.town + ', ' + doc.zipcode}] });
			});
		})
	}

	addItem = () => {
		let item = this.state.selectedOption;
		let quantity = document.getElementById('quantity').value;
		let rate = quantity * this.state.rate;
		let discount = this.state.discount;
		let discountAmount = rate * (discount/100);
		let netAmount = rate - (rate * (discount/100));
		let gst = this.state.gst;
		let gstAmount = (rate - discountAmount) * (gst/100);
		let gross = rate - discount + gstAmount
		this.setState({rows: [...this.state.rows, { item: item, qty: quantity, rate: rate, discp: discount, disca: discountAmount, netamt: netAmount, gstp: gst, gsta: gstAmount, gross: gross, action: <MDBIcon icon='trash' className='red-text' size='1x' style={{ cursor: 'pointer' }} onClick={() => this.handleDelete(item)} />}] });
	}

	handleDelete = (id) => {
		let rows = this.state.rows.filter(row => row.item !== id);
		this.setState({ rows: rows });
	};

	invoice = () => {
        var pdf = new jsPDF('l');

        function pdfFont(size, color, face, bold = false) {
            pdf.setFontSize(size);
            pdf.setFont(face, bold ? "bold" : "");
            pdf.setTextColor(color);
        }

        pdfFont(40, "#000085", "Helvetica");
        pdf.text("Microsoft", 20, 30);

        pdfFont(16, "#969696", "Helvetica");
        pdf.text(`Receipt #ABC`, 220, 27)
        
        pdfFont(20, "black", "Helvetica", true);
        pdf.text("Invoice", 22, 50);

        if (true) {
          pdfFont(14, "#808080", "Helvetica");
          pdf.text(`GST REGISTRATION NO.: ABCD`, 22, 60); // GST Number
        }

        // pdfFont(13, "#808080", "Helvetica", true);
        // pdf.text("AMOUNT PAID", 22, 80);

        pdfFont(13, "#808080", "Helvetica", true);
        pdf.text("ISSUED TO", 22, 90);

        pdfFont(14, "#727272", "Helvetica");
        pdf.text(this.state.selectedCustomer, 65, 90); // Customer Name

        pdfFont(13, "#808080", "Helvetica", true);
        pdf.text("ADDRESS", 22, 100);

        pdfFont(14, "#727272", "Helvetica");
        pdf.text(this.state.selectedAddress, 65, 100); // Customer Address


		let totalAmount = 0;
        let bodyArr = [];

        for (const row of this.state.rows) {
            bodyArr.push([row.item, row.qty, row.rate, row.discp, row.disca, row.netamt, row.gstp, row.gsta, row.gross]);
			totalAmount = totalAmount + row.gross;
		}

		// pdfFont(15, "black", "Helvetica", true);
        // pdf.text(`INR ${totalAmount}`, 65, 80); // Amount

        let headArr = [];

        let total = [];

        headArr = [['ITEM', 'QTY', 'RATE', 'DIS %', 'DISC', 'NET AMT', 'GST %', 'GST AMT', 'GROSS']];
		total.push([, , , '', , '']);
		total.push([, , , '', , '']);
		total.push([, , , "Total", ,`INR ${totalAmount}`]);
        
        bodyArr.push(...total);

        pdf.autoTable({
            head: headArr,
            showHead: 'firstPage',
            theme: "plain",
            startY: 120,
            styles: { valign: 'middle', cellPadding: { left: 10, top: 3, bottom: 3, right: 0 } },
            headStyles: { textColor: [128, 128, 128], fillColor: [235, 235, 235] },
            bodyStyles: { textColor: [94, 94, 94], fontSize: 12 },
            columnStyles: { 0: { minCellWidth: 80 } },
            willDrawCell: (data) => {
                var doc = data.doc;
                var rows = data.table.body;
                if (data.row.index === rows.length - 1) {
                    doc.setTextColor("black");
                    doc.setFontSize(20);
                    doc.setFont("Helvetica", "bold");
                } else if (data.row.index === rows.length - 2 || data.row.index === rows.length - 3) {
                    doc.setTextColor("black");
                    doc.setFontSize(16);
                    doc.setFont("Helvetica", "bold");
                }
            },
            body: bodyArr,
        })

        // save
        pdf.save(`invoice.pdf`);
    }
	
	render() {

		const data = {
			columns: [
				{label: 'Item', field: 'item', sort: 'asc',  width: 100},
				{label: 'Qty', field: 'qty',   sort: 'asc', },
				{label: 'Rate', field: 'rate',	sort: 'asc', 	},
				{label: 'Disc %', field: 'discp', sort: 'asc', 	},
				{label: 'Disc Amt', field: 'disca',  sort: 'asc',	},
				{label: 'Net Amt', field: 'netamt',sort: 'asc',	},
				{label: 'GST %', field: 'gstp',sort: 'asc',	},
				{label: 'GST Amt', field: 'gsta',sort: 'asc',	},
				{label: 'Gross Amt', field: 'gross',sort: 'asc',	},
				{label: 'Action', field: 'action',sort: 'asc',	},
			],
			rows: this.state.rows
		}

		const options = this.state.items;

		const quantity = [
			{ value: "1KG", label: "1KG" },
			{ value: "2KG", label: "2KG" },
		 ];

		return(
			<Fragment>
				
				<div className="form-head d-flex mb-3 mb-md-5 align-items-start">
					<div className="mr-auto d-none d-lg-block">
						<Link to="/order-list" className="text-primary d-flex align-items-center mb-3 font-w500" >
						<svg className="mr-3" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.274969 5.14888C0.27525 5.1486 0.275484 5.14827 0.275812 5.14799L5.17444 0.272997C5.54142 -0.0922061 6.135 -0.090847 6.5003 0.276184C6.86555 0.643168 6.86414 1.23675 6.49716 1.60199L3.20822 4.87499H23.0625C23.5803 4.87499 24 5.29471 24 5.81249C24 6.33027 23.5803 6.74999 23.0625 6.74999H3.20827L6.49711 10.023C6.86409 10.3882 6.8655 10.9818 6.50025 11.3488C6.13495 11.7159 5.54133 11.7171 5.17439 11.352L0.275764 6.47699C0.275483 6.47671 0.27525 6.47638 0.274921 6.4761C-0.0922505 6.10963 -0.0910778 5.51413 0.274969 5.14888Z" fill="#EA4989"/>
						</svg>
						Back</Link >
						<Link to="/order-list" className="mb-0 text-black font-w500" >Orders  /</Link >
						<Link to={"#"} className="mb-0 font-w500" > Add Order </Link >
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="form-group">
							{/* <input type="text" className="form-control customer" placeholder="Customer Name" /> */}
							<Select
								id = "item"
								placeholder = "Select Customer"
								options={this.state.customers}
								onChange={(option) => this.setState({ selectedCustomer: option.value, selectedAddress: option.address })} />
						</div>
						<hr></hr>
						<div className="row">
							<div className="col-5">
								<div className="form-group">
									<Select
										id = "item"
										placeholder = "Select Product"
										options={options}
										onChange={(option) => this.setState({ selectedOption: option.value, rate: option.rate, discount: option.discount, gst: option.gst })} />
								</div>
							</div>
							<div className="col-5">
							<Select
								options={quantity}
							/>
							</div>
							<div className="col-2">
								<div className="form-group">
									<input type="number" className="form-control" id="quantity" placeholder="Quantity" min="1" />
								</div>
							</div>
							<div className="col-4">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Rate" value={this.state.rate} />
								</div>
							</div>
							<div className="col-4">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Discount %" value={this.state.discount} />
								</div>
							</div>
							<div className="col-4">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="GST %" value={this.state.gst} />
								</div>
							</div>
						</div>
						<button type="button" class="btn btn-primary" style={{float: "right"}} onClick={this.addItem}>Add Item</button>
						<div className="table-responsive">
							<div  className="display mb-4 dataTablesCard">					
								<MDBDataTable  striped 	small	data={data}	/>		
							</div>
						</div>
						<button type="button" class="btn btn-primary mx-2" style={{float: "right"}}>Save</button>
						<button type="button" class="btn btn-secondary mx-2" style={{float: "right"}} onClick={this.invoice}>Generate Invoice</button>
					</div>
				</div>
					
			</Fragment>
		)
	}
}

export default Order;