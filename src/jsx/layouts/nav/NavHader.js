import React, { useState } from "react";

/// React router dom
import { Link } from "react-router-dom";

/// images
import logo from "../../../images/logo.png";
import logoText from "../../../images/logo-text.png";

const NavHader = () => {
   const [toggle, setToggle] = useState(false);

   return (
      <div className="nav-header">
         <Link to="/" className="brand-logo">
            <img className="logo-abbr" src={logo} alt="" />
            <img className="logo-compact" src={logoText} alt="" />
            {/* <img className="brand-title" src={logoText} alt="" /> */}
         </Link>
      </div>
   );
};

export default NavHader;
