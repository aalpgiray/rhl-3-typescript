import { CSSProperties, Component } from 'react';
import { LinearProgress } from 'material-ui'

interface IProgressBarProps {
  style?: CSSProperties
}
interface IProgressBarState {
}

export class ProgressBar extends Component<IProgressBarProps, IProgressBarState> {
  render() {
    return (
      <LinearProgress style={this.props.style} color="#EF5350" mode="indeterminate" />
    );
  }
}
