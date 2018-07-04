import React from 'react';
import ReactDOM from 'react-dom';

const Page = () => (
  <div>
    <CountingParent/>
    <CountingParent/>
    <CountingParent/>
  </div>
);

function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Click Me!
    </button>
  );
}

class CountingParent extends React.Component {
  state = {
    actionCount: 0
  }

  handleAction = (action) => {
    console.log('Child says', action);
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  resetState = () => {
    this.setState({
      actionCount: 0
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction}/>
        <p>Clicked {this.state.actionCount} times</p> 
        <button onClick={this.resetState}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page/>,
  document.getElementById('root')
);