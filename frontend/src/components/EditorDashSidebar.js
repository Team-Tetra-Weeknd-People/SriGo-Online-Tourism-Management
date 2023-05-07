import '../styles/sudul/EditorDashSidebar.css'
import { Link } from 'react-router-dom';

function EditorDashSidebar() {
  return (
    <div className='EditorDashSidebarMainCont' data-testid="editordashsidebar">
      <div className='EditorDSLogoCont'>
        <center>
          <img src={'https://firebasestorage.googleapis.com/v0/b/srigo-c895d.appspot.com/o/%5BCROPPED%5DLETTERS%20ONLY%20TRANSPARENT.png?alt=media&token=d9c540ba-f0e6-41e0-8e7c-ddd87d9c8b27'} alt='logo' />
        </center>
      </div>
      <Link className='EditorSTabContS' to={`/editorDashboard`}>
        <span className="material-symbols-outlined">dashboard</span><p>Dashboard</p>
      </Link>
      <p className='EditorSTabContL'>
        <span className="material-symbols-outlined">analytics</span><p>Web Content</p>
      </p>
      <p className='EditorSTabContSub'>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/flight`}>
          <span className="material-symbols-outlined">flight</span><p>Flights</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/hotel`}>
          <span className="material-symbols-outlined">hotel</span><p>Hotels</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/destination`}>
          <span className="material-symbols-outlined">pin_drop</span><p>Destinations</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/taxi`}>
          <span className="material-symbols-outlined">local_taxi</span><p>Taxis</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/package`}>
          <span className="material-symbols-outlined">package</span><p>Packages</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/cultures`}>
          <span className="material-symbols-outlined">Celebration</span><p>Cultural Scenarios</p>
        </Link>
      </p>
    </div>
  )
}

export default EditorDashSidebar