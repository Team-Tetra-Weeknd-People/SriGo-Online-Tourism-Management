import { Link, Outlet } from "react-router-dom";
import FinanceDashSidebar from "../components/FinanceDashSidebar";
import '../styles/sudul/SharedLayoutFinanceDashboard.css'

function SharedLayoutFinanceDashboard() {
  return (
    <div className='SharedLayoutFinanceDashMainCont'>
        <FinanceDashSidebar />
        <Outlet />
      <Link to={"/"}>
        <button className='HomeBtn'>Home</button>
      </Link>
    </div>
  )
}

export default SharedLayoutFinanceDashboard