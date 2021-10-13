import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

class MM extends Component {
   componentDidMount() {
      this.$el = this.el;
      this.mm = new MetisMenu(this.$el);
   }
   componentWillUnmount() {
      this.mm("dispose");
   }
   render() {
      return (
         <div className="mm-wrapper">
            <ul className="metismenu" ref={(el) => (this.el = el)}>
               {this.props.children}
            </ul>
         </div>
      );
   }
}

class SideBar extends Component {
   /// Open menu
   componentDidMount() {
      // sidebar open/close
      var btn = document.querySelector(".nav-control");
      var aaa = document.querySelector("#main-wrapper");

      function toggleFunc() {
         return aaa.classList.toggle("menu-toggle");
      }

      // btn.addEventListener("click", toggleFunc);
   }
   render() {
      /// Path
      const path = window.location.pathname;

      /// Active menu
      let deshBoard = [
            "",
            "analytics",
            "companies",
            "statistics",
			
         ],
         app = [
            "app-profile",
            "app-calender",
            "email-compose",
            "email-inbox",
            "email-read",
            "ecom-product-grid",
            "ecom-product-list",
            "ecom-product-list",
            "ecom-product-order",
            "ecom-checkout",
            "ecom-newproduct",
            "ecom-neworders",
            "ecom-invoice",
            "ecom-customers",
         ],
         charts = [
            "chart-morris",
            "chart-chartjs",
            "chart-chartist",
            "chart-sparkline",
            "chart-peity",
         ],
         bootstrap = [
            "ui-accordion",
            "ui-badge",
            "ui-alert",
            "ui-button",
            "ui-modal",
            "ui-button-group",
            "ui-list-group",
            "ui-media-object",
            "ui-card",
            "ui-carousel",
            "ui-dropdown",
            "ui-popover",
            "ui-progressbar",
            "ui-tab",
            "ui-typography",
            "ui-pagination",
            "ui-grid",
         ],
         plugins = [
            "uc-select2",
            "uc-nestable",
            "uc-sweetalert",
            "uc-toastr",
            "uc-jqvmap",
            "uc-noui-slider",
         ],
         widget = ["widget"],
         forms = [
            "form-element",
            "form-wizard",
            "form-editor-summernote",
            "form-pickers",
            "form-validation-jquery",
         ],
         table = ["table-bootstrap-basic", "table-datatable-basic"];

      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <MM className="metismenu" id="menu">
                  <li
                     className={`${
                        deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="ai-icon"
                        to="/"
                     >
                        <span className="nav-text">Dashboard</span>
                     </Link>
                  </li>
                  <li
                     className={`${
                        deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="ai-icon"
                        to="/customers"
                     >
                        <span className="nav-text">Customers</span>
                     </Link>
                  </li>
                  <li
                     className={`${
                        deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="ai-icon"
                        to="/products"
                     >
                        <span className="nav-text">Products</span>
                     </Link>
                  </li>
                  <li
                     className={`${
                        deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="ai-icon"
                        to="/order-list"
                     >
                        <span className="nav-text">Orders</span>
                     </Link>
                  </li>
                  {/* <li
                     className={`${
                        deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <i className="flaticon-381-networking"></i>
                        <span className="nav-text">Dashboard</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                           <Link to="analytics">Analytics</Link>
                        </li>
						      <li>
                           <Link to="review">Review</Link>
                        </li>
						      <li>
                           <Link to="order">Order</Link>
                        </li>
                        
						      <li>
                           <Link to="order-list">Order List</Link>
                        </li>

                        <li>
                           <Link to="ecom-neworders">Add Orders</Link>
                        </li>

                        <li>
                           <Link to="ecom-newproduct">Add Products</Link>
                        </li>
                       
						      <li>
                           <Link to="customer-list">Customer List</Link>
                        </li>
                        <li>
                           <Link to="/ecom-checkout">Add Customers</Link>
                        </li>
                     </ul>
                  </li> */}
               </MM>
				
            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
