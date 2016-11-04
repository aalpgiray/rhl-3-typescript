import {Link} from "react-router";
import {ProgressBar} from "./components/common/ProgressBar";
import {CSSProperties} from "react";


interface ILayout {
  children?: any;
  loading: boolean;
}

export default ({children, loading}: ILayout) => {

  const progressStyle: CSSProperties = {
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    height: "3px",
    zIndex: 2
  }

  return (
    <div className="container">
      {loading && <ProgressBar style={progressStyle}/>}
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <Link className="navbar-brand" to="/"><i className="material-icons">fingerprint</i></Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/Courses">Courses</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}
    </div>
  )
}
