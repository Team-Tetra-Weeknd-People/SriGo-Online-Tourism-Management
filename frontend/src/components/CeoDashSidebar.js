import "../styles/sudul/CeoDashSidebar.css";
import { Link } from "react-router-dom";

function CeoDashSidebar() {
  return (
    <div className="CeoDashSidebarMainCont">
      <div className="CeoDSLogoCont">
        <center>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/srigo-c895d.appspot.com/o/%5BCROPPED%5DLETTERS%20ONLY%20TRANSPARENT.png?alt=media&token=d9c540ba-f0e6-41e0-8e7c-ddd87d9c8b27"
            }
            alt="logo"
          />
        </center>
      </div>
      {/* <hr className='Ceohrline' /> */}
      <Link className="CeoSTabContS" to={`/ceoDashboard/ceoRevenue`}>
        <span className="material-symbols-outlined">dashboard</span>
        <p>Dashboard</p>
      </Link>
      <p className="CeoSTabContL">
        <span className="material-symbols-outlined">analytics</span>
        <p>Overview</p>
      </p>
      <p className="CeoSTabContSub">
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/flight`}>
          <span className="material-symbols-outlined">flight</span>
          <p>Flights</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/hotel`}>
          <span className="material-symbols-outlined">hotel</span>
          <p>Hotels</p>
        </Link>
        <Link
          className="CeoSTabContS"
          to={`/ceoDashboard/ceoOverview/destination`}
        >
          <span className="material-symbols-outlined">pin_drop</span>
          <p>Destinations</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/taxi`}>
          <span className="material-symbols-outlined">local_taxi</span>
          <p>Taxis</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/package`}>
          <span className="material-symbols-outlined">package</span>
          <p>Packages</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/user`}>
          <span className="material-symbols-outlined">person</span>
          <p>Users</p>
        </Link>
      </p>
    </div>
  );
}

export default CeoDashSidebar;
