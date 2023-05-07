import "../styles/sudul/Footer.css";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbarx from "react-bootstrap/Navbar";

function Footer() {
  return (
    <div className="footerCont" data-testid="footer">
      <img
        style={{ width: "100px", height: "auto" }}
        src={
          "https://firebasestorage.googleapis.com/v0/b/srigo-c895d.appspot.com/o/%5BCROPPED%20-%20WHITE%5DLETTERS%20ONLY%20TRANSPARENT.png?alt=media&token=ecbbb39b-c625-48cc-9635-996257610f37"
        }
        alt="heroimg"
      />
      © 2023 SriGo.
      <p style={{ fontSize: "12px", marginTop: "4px" }}>
        SriGo is part of SriGo Holdings Inc., the world leader in online
        travel & related services.
      </p>
      {/* <div className="blurContainer" /> */}
    </div>
  );
}

export default Footer;
