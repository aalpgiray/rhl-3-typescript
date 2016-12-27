import { Link } from "react-router";
import { ProgressBar } from "./components/common/ProgressBar";
import { CSSProperties, Component } from 'react';
import {
  AppBar,
  IconMenu,
  IconButton,
  MenuItem,
  Drawer
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import colors from 'colors';
import { IManageCoursePageProps } from './pages/ManageCourse/ManageCoursePage.interfaces';
import autobind from 'autobind-decorator';

export interface ILayoutProps {
  children?: any;
  loading: boolean;
}

export interface ILayoutState {
  drawer: boolean;
}

const progressStyle: CSSProperties = {
  position: "fixed",
  width: "100%",
  top: "0",
  left: "0",
  height: "3px",
  zIndex: 2000
}

@autobind
export default class Layout extends Component<ILayoutProps, ILayoutState>{
  constructor(props: IManageCoursePageProps) {
    super(props);

    this.state = {
      drawer: false
    }
  }
  componentDidMount() {
    this.setState({ drawer: false });
  }

  toogleDrawer() {
    this.setState({ drawer: !this.state.drawer })
  }
  render() {
    return (
      <div class="container-fluid">
        {this.props.loading && <ProgressBar style={progressStyle} />}
        {
          // <AppBar
          //   title={
          //     <div style={{ display: "flex" }}>
          //       <Link to="/" activeStyle={{ backgroundColor: "#1E88E5" }} style={{ textDecoration: "none" }}><MenuItem style={{ color: "white" }} primaryText="Tarımsal İşletme Danışmanlığı" /></Link>
          //       <Link to="/Visit" activeStyle={{ backgroundColor: "#1E88E5" }} style={{ textDecoration: "none" }}><MenuItem style={{ color: "white" }} primaryText="Ziyaret Kayıtları" /></Link>
          //     </div>
          //   }
          //   showMenuIconButton={false}
          //   // onLeftIconButtonTouchTap={this.toogleDrawer}
          //   iconElementRight={<IconMenu
          //     iconButtonElement={
          //       <IconButton><MoreVertIcon /></IconButton>
          //     }
          //     targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          //     anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          //     >
          //     <MenuItem primaryText="Çıkış" />
          //   </IconMenu>}
          //   />

          // <Drawer
          //   docked={false}
          //   open={this.state.drawer}
          //   onRequestChange={(drawer) => this.setState({ drawer })}
          //   >
          //   <Link to="/" onTouchTap={this.toogleDrawer}><MenuItem primaryText="Tarımsal İşletme Danışmanlığı" /></Link>
          //   <Link to="/Visit" onTouchTap={this.toogleDrawer}><MenuItem primaryText="Ziyaret Kayıtları" /></Link>
          // </Drawer>
        }

        {this.props.children}
      </div>
    )
  }
}
