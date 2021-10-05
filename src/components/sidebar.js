
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Badge } from 'reactstrap';
 




const Sidebar = () => {
    return (
      <div
      id="wt-sidebarwrapper" className="wt-sidebarwrapper ">
        <CDBSidebar textColor="black" backgroundColor="white" width="100%">
          <CDBSidebarHeader   prefix={<i className="fa fa-bars"></i>}>
          <div className="wt-userlogedin">
                                    <figure className="wt-userimg">
                                        <img src={process.env.PUBLIC_URL + 'assets/images/user-img.jpg'} alt="imae description" />
                                    </figure>
                                    <div className="wt-username">
                                        <h3> Louanne Mattioli</h3>
                                        <Badge color="success">Amento Tech</Badge>
                                    </div>
                                </div>
          </CDBSidebarHeader>
   
          <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu >
            
          <NavLink exact to="/dashboard" >
              <CDBSidebarMenuItem><i className="ti-dashboard"></i>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/profile" >
              <CDBSidebarMenuItem><i className="ti-briefcase"></i>Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/order-details" >
              <CDBSidebarMenuItem><i className="ti-package"></i>All Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/messages" >
              <CDBSidebarMenuItem ><span className="wt-notificationicon"></span><i className="ti-pencil-alt"></i>Messages</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/custom-offers" >
              <CDBSidebarMenuItem><i className="ti-heart"></i>Custom Offers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="workfuxservices" >
              <CDBSidebarMenuItem><i className="ti-layers"></i>
                Category Services
              </CDBSidebarMenuItem>
            </NavLink>
 
            <NavLink
              exact
              to="/">
              <CDBSidebarMenuItem><i className="ti-shift-right"></i>
                Logout
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
   
  export default Sidebar;
  
  


// const Sidebar = () => {
   
//     return (
//         <>
//         		<div id="wt-sidebarwrapper" className="wt-sidebarwrapper">
// 					<div id="wt-btnmenutoggle" className="wt-btnmenutoggle">
// 						<span className="menu-icon">
// 							<em></em>
// 							<em></em>
// 							<em></em>
// 						</span>
// 					</div>
// 					<div id="wt-verticalscrollbar" className="wt-verticalscrollbar">
// 						<div className="wt-companysdetails wt-usersidebar">
// 							<figure className="wt-companysimg">
// 								<img src={process.env.PUBLIC_URL + 'images/sidebar/img-01.jpg'} alt="img description" />
// 							</figure>
// 							<div className="wt-companysinfo">
// 								<figure><img src={process.env.PUBLIC_URL + 'images/sidebar/img-01.jpg'} alt="img description" /></figure>
// 								<div className="wt-title">
// 									<h2><a href="/"> Louanne Mattioli</a></h2>
// 									<span>Amento Tech</span>
// 								</div>
// 								<div className="wt-btnarea"><a href="assistant.html" className="wt-btn">virtual Assistant</a></div>
// 							</div>
// 						</div>
// 						<nav id="wt-navdashboard" className="wt-navdashboard">
// 							<ul>
// 								<li className="menu-item-has-children">
// 									<a href="dashboard-user.html">
// 										<i className="ti-dashboard"></i>
// 										<span>Dashboard</span>
// 									</a>
									
// 								</li>
// 								<li>
// 									<a href="dashboard-profile.html">
// 										<i className="ti-briefcase"></i>
// 										<span>My Profile</span>
// 									</a>
// 								</li>
// 								<li className="menu-item-has-children">
// 									<a href="/">
// 										<i className="ti-package"></i>
// 										<span>All Orders</span>
// 									</a>
// 									<ul className="sub-menu">
// 										<li><hr/><a href="dashboard-completejobs.html">Completed Orders</a></li>
// 										<li><hr/><a href="dashboard-canceljobs.html">Cancelled Jobs</a></li>
// 										<li><hr/><a href="dashboard-ongoingjob.html">Ongoing Jobs</a></li>
			
// 									</ul>
// 								</li>
								
// 								<li className="wt-notificationicon menu-item-has-children wt-active">
// 									<a href="dashboard-messages2.html">
// 										<i className="ti-pencil-alt"></i>
// 										<span>Messages</span>
// 									</a>
									
// 								</li>
// 								<li>
// 									<a href="dashboard-invocies.html">
// 										<i className="ti-heart"></i>
// 										<span>Custom Offers</span>
// 									</a>
// 								</li>
								
// 								<li>
// 									<a href="category.html">
// 										<i className="ti-layers"></i>
// 										<span>Category Services</span>
// 									</a>
// 								</li>
							
							
							
// 								<li>
// 									<a href="dashboard-helpsupport.html">
// 										<i className="ti-tag"></i>
// 										<span>Help &amp; Support</span>
// 									</a>
// 								</li>
// 								<li>
// 									<a href="index.html">
// 										<i className="ti-shift-right"></i>
// 										<span>Logout</span>
// 									</a>
// 								</li>
// 							</ul>
// 						</nav>
// 						<div className="wt-navdashboard-footer">
// 							<span>Worktern. © 2019 All Rights Reserved.</span>
// 						</div>
// 					</div>
// 				</div>
				
//         </>
//     )
// }

// export default Sidebar;