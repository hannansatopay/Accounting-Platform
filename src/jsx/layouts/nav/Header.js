import React from "react";
import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/profile/12.png";
import avatar from "../../../images/avatar/1.jpg";

const Header = ({ onNote, toggle, onProfile, onActivity, onNotification}) => {
   var path = window.location.pathname.split("/");
   var name = path[path.length - 1].split("-");
   var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
   var finalName = filterName.includes("app")
      ? filterName.filter((f) => f !== "app")
      : filterName.includes("ui")
      ? filterName.filter((f) => f !== "ui")
      : filterName.includes("uc")
      ? filterName.filter((f) => f !== "uc")
      : filterName.includes("basic")
      ? filterName.filter((f) => f !== "basic")
      : filterName.includes("form")
      ? filterName.filter((f) => f !== "form")
      : filterName.includes("table")
      ? filterName.filter((f) => f !== "table")
      : filterName.includes("page")
      ? filterName.filter((f) => f !== "page")
      : filterName.includes("email")
      ? filterName.filter((f) => f !== "email")
      : filterName.includes("ecom")
      ? filterName.filter((f) => f !== "ecom")
      : filterName.includes("chart")
      ? filterName.filter((f) => f !== "chart")
      : filterName.includes("editor")
      ? filterName.filter((f) => f !== "editor")
      : filterName;
	
	var page_name = (finalName.join(" ") === '')?'Dashboard':finalName.join(" ");	
	  
   return (
      <div className="header">
         <div className="header-content">
            <nav className="navbar navbar-expand">
               <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                     <div
                        className="dashboard_bar"
                        style={{ textTransform: "capitalize" }}
                     >
                        {page_name}
                     </div>
                  </div>

                  <ul className="navbar-nav header-right">
                     <li className="nav-item">
						{/*  <div className="input-group search-area d-lg-inline-flex d-none">
                           <input
                              type="text"
                              className="form-control"
                              placeholder="Search something here..."
                           />
                           <div className="input-group-append">
                              <span className="input-group-text">
                                 <i className="flaticon-381-search-2"></i>
                              </span>
                           </div>
                        </div> */}
                     </li>
					 <li className="nav-item dropdown notification_dropdown">
                        
                        <div
                           className={`dropdown-menu dropdown-menu-right ${
                              toggle === "activity" ? "show" : ""
                           }`}
                        >
                           <PerfectScrollbar
                              id="DZ_W_Notification1"
                              className={` widget-media dz-scroll p-3 height380 ${
                                 toggle === "activity"
                                    ? "ps ps--active-y"
                                    : ""
                              }`}
                           >
                              
                           </PerfectScrollbar>
                        
                        </div>
                     </li>
                     <li className="nav-item dropdown notification_dropdown">
                        
                     </li>
                     <li className="nav-item dropdown notification_dropdown">
                        
                        <div
                           className={`dropdown-menu dropdown-menu-right p-3 ${
                              toggle === "notification" ? "show" : ""
                           }`}
                        >
                           <PerfectScrollbar
                              id="DZ_W_Gifts"
                              className={` widget-timeline dz-scroll style-1 ${
                                 toggle === "notification"
                                    ? "ps ps--active-y"
                                    : ""
                              }`}
                           >
								<ul className="timeline">
									<li>
										<div className="timeline-badge primary"></div>
										<Link to={""} className="timeline-panel text-muted" >
											<span>10 minutes ago</span>
											<h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
										</Link>
									</li>
									<li>
										<div className="timeline-badge info"></div>
										<Link to={""} className="timeline-panel text-muted" >
											<span>20 minutes ago</span>
											<h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
											<p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
										</Link>
									</li>
									<li>
										<div className="timeline-badge danger"></div>
										<Link to={""} className="timeline-panel text-muted" >
											<span>30 minutes ago</span>
											<h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
										</Link>
									</li>
									<li>
										<div className="timeline-badge success"></div>
										<Link to={""} className="timeline-panel text-muted" >
											<span>15 minutes ago</span>
											<h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
										</Link>
									</li>
									<li>
										<div className="timeline-badge warning"></div>
										<Link to={""} className="timeline-panel text-muted" >
											<span>20 minutes ago</span>
											<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
										</Link>
									</li>
									<li>
										<div className="timeline-badge dark">
										</div>
										<Link to={""} className="timeline-panel text-muted" >
											<span>20 minutes ago</span>
											<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
										</Link>
									</li>
								</ul>
                           </PerfectScrollbar>
                           
                        </div>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Header;
