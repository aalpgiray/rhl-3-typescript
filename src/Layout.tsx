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
    <div class="container">
      {loading && <ProgressBar style={progressStyle}/>}
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
              <Link class="navbar-brand" to="/"><i class="material-icons">fingerprint</i></Link>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
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
