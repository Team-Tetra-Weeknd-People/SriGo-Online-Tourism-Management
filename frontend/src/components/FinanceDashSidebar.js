import '../styles/sudul/FinanceDashSidebar.css'
import { Link } from 'react-router-dom';

function FinanceDashSidebar() {
  return (
    <div className='FinanceDashSidebarMainCont'>
      <div className='FinanceDSLogoCont'>
        <center>
          <img src={'https://firebasestorage.googleapis.com/v0/b/srigo-c895d.appspot.com/o/%5BCROPPED%5DLETTERS%20ONLY%20TRANSPARENT.png?alt=media&token=d9c540ba-f0e6-41e0-8e7c-ddd87d9c8b27'} alt='logo' />
        </center>
      </div>
      {/* <hr className='Ceohrline' /> */}
      <Link className='FinanceSTabContS' to={`/financeDashboard`}>
        <span className="material-symbols-outlined">dashboard</span><p>Dashboard</p>
      </Link>
      <p className='FinanceSTabContL'>
        <span className="material-symbols-outlined">pending_actions</span><p>Pending</p>
      </p>
      <p className='FinanceSTabContSub'>
        <Link className='FinanceSTabContS' to={`/financeDashboard/pending/flight`}>
          <span className="material-symbols-outlined">flight</span><p>Flights</p>
        </Link>
        <Link className='FinanceSTabContS' to={`/financeDashboard/pending/hotel`}>
          <span className="material-symbols-outlined">hotel</span><p>Hotels</p>
        </Link>
        <Link className='FinanceSTabContS' to={`/financeDashboard/pending/destination`}>
          <span className="material-symbols-outlined">pin_drop</span><p>Destinations</p>
        </Link>
        <Link className='FinanceSTabContS' to={`/financeDashboard/pending/taxi`}>
          <span className="material-symbols-outlined">local_taxi</span><p>Taxis</p>
        </Link>
        <Link className='FinanceSTabContS' to={`/financeDashboard/pending/package`}>
          <span className="material-symbols-outlined">package</span><p>Packages</p>
        </Link>
      </p>
      <Link className='FinanceSTabContS' to={`/financeDashboard/financeRevenue`}>
        <span className="material-symbols-outlined">monitoring</span><p>Revenue</p>
      </Link>
      <Link className='FinanceSTabContS' to={`/financeDashboard/invoice`}>
        <span className="material-symbols-outlined">receipt_long</span><p>Invoices</p>
      </Link>
    </div>
  )
}

export default FinanceDashSidebar