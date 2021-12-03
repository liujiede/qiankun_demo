// import { registerMicroApps, initGlobalState, start } from "qiankun";

// const actions = initGlobalState({
//   string: "",
// });

// actions.onGlobalStateChange((state, prev) => {
//   console.log("master global state change event", state, prev);
// });

// registerMicroApps([
//   {
//     name: "app1",
//     entry: "//localhost:8001",
//     container: "#root",
//     activeRule: "/app1",
//   },
//   {
//     name: "app2",
//     entry: "//localhost:8000",
//     container: "#root",
//     activeRule: "/app2",
//   },
// ]);

// start();


import { loadMicroApp, addGlobalUncaughtErrorHandler } from 'qiankun';
addGlobalUncaughtErrorHandler(function(){
  console.log(arguments);
});


import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  containerRef = React.createRef();
  microApp = null;

  componentDidMount() {
    this.microApp = loadMicroApp({
      name: 'app1',
      entry: 'http://localhost:8001',
      activeRule: 'app1',
      container: this.containerRef.current,
    });
  }

  componentWillUnmount() {
    this.microApp.unmount();
  }

  componentDidUpdate() {
    this.microApp.update({ name: 'kuitos' });
  }

  render() {
    // return <div ref={this.containerRef}></div>;

    return React.createElement('div', { ref: this.containerRef, style: { backgroundColor: 'blue' } }, 555);
  }
}

ReactDom.render(React.createElement(App, null), document.getElementById('root'), function () {
  // alert('ready');
});