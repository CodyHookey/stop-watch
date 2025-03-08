class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassedInMs: 0,
    };

    this.timer = null;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if (!this.timer) {
      let startTime = Date.now();
      this.timer = setInterval(() => {
        const stopTime = Date.now();
        const timePassedInMs = stopTime - startTime + this.state.timePassedInMs;

        this.setState({
          timePassedInMs,
        });

        startTime = stopTime;
      }, 250); // Executed every 250 millisecond
    }
  }

  stop() {
    window.clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    this.stop();
    this.setState({
      timePassedInMs: 0,
    });
  }

  render() {
    return (
      <div>
        <h2
          className="border px-3 py-4 rounded my-3 mx-auto text-center stopWatchCount"
          style={{ maxWidth: "300px" }}
        >
          {Math.floor(this.state.timePassedInMs / 1000)}s
        </h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary mr-2" onClick={this.start}>
            Start
          </button>
          <button className="btn btn-outline-danger mr-2" onClick={this.stop}>
            Stop
          </button>
          <button className="btn btn-outline-warning" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<StopWatch />);
