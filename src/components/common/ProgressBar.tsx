import {CSSProperties, Component} from 'react';

interface IProgressBarProps {
  percent?: number
  style?: CSSProperties
}

interface IProgressBarState {
  percent: number
}

export class ProgressBar extends Component<IProgressBarProps, IProgressBarState> {

  constructor(props: IProgressBarProps) {
    super(props);
    this.state = {percent: props.percent || 0};
  }

  intervals: number[] = [];
  timeouts: number[] = [];

  componentDidMount() {
    if (this.state.percent == 0) {
      this.fastLoad();
    }
  }

  fastLoad() {
    this.timeouts.push(setTimeout(()=> this.setState({percent: 80}), 0));
    this.timeouts.push(setTimeout(() => this.slowLoad(), 30000));
  }

  slowLoad() {
    this.intervals.push(setInterval(() => {
      this.setState({percent: this.state.percent + 1});
      if (this.state.percent == 100) {
        this.intervals.forEach(e => clearInterval(e));
      }
    }, 1000))
  }

  componentWillUnmount() {
    this.intervals.forEach(e => clearInterval(e));
    this.timeouts.forEach(e => clearTimeout(e));
  }

  render() {
    const {style} = this.props;
    const {percent} = this.state;

    return (
      <div class="progress" style={style || { height: "3px" }}>
        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow={percent}
             aria-valuemin="0" aria-valuemax="100"
             style={{ width: percent + "%", transition: "all 30s cubic-bezier(0, 1.11, 0.17, 1.01)", transform: "translate3d(0,0,0)" }}>
          <span class="sr-only">{percent}% Complete</span>
        </div>
      </div>
    )
  }
}
