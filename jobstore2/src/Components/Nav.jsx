import { Link } from "react-router-dom";
import { MENU } from "../assets/Icons";
import { LOGIN } from "../assets/Icons";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="sm:py-5 max-lg:justify-between max-lg:px-10 w-full font-poppins text-5xl flex justify-evenly items-center border-b-[1px] border-nav-border  bg-[#12141D] text-[#F8F8F8] max-container">
      <span style={{ fontFamily: "Poppins" }}>
        <Link to="/">
        <h2 className="text-3xl font-semibold">Jobstore</h2>
        </Link>
      </span>

      <div
        style={{ fontFamily: "Poppins" }}
        className="flex gap-8 text-ml font-medium max-lg:hidden"
      >
        <Link to="/">Find Jobs</Link>
        <Link to="/people">People</Link>
        <Link to="/education">Education</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div
        style={{ fontFamily: "Poppins" }}
        className="flex gap-5 text-ml font-medium max-lg:hidden"
      >

{isAuthenticated && (
          <p className="flex items-center">{user.name}</p>
        )}

        {isAuthenticated ? (
         <button className="border-[1px] border-[#6D6D6D] px-6 py-2 rounded-lg flex items-center gap-3" onClick={()=> logout({logoutParams: {returnTo: window.location.origin} })}>
          Log Out
        </button> 
        )
        : 
        (
        <button className="border-[1px] border-[#6D6D6D] px-6 py-2 rounded-lg flex items-center gap-3" onClick={()=>loginWithRedirect()}>
        <img src={LOGIN} alt="loginLogo" width={20} height={20}/>
        Log In
      </button>
      )}
        
      </div>

      <div className="hidden max-lg:block">
        <img src={MENU} alt="menu" height={35} width={35} />
      </div>
    </div>
  );
};

export default Nav;
