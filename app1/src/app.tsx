// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';

const isSub = !!window?.application?.current;

// @ts-ignore
const AppRouter = window?.FramexRouter?.AppletRouter;

export function rootContainer(container) {
  if (isSub) return React.createElement(AppRouter, null, container);
  return container;
}

export const request = {
  timeout: 20000,
  errorConfig: {},
  middlewares: [],
  responseInterceptors: [],
  credentials: 'include', // 默认请求是否带上cookie
};

export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
    window.application.setCache('rootElement', props.containerId);
    document.getElementById(props?.containerId) &&
      ReactDOM.render(<Index />, document.getElementById(props?.containerId));
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
  },
};

export default function(){
  return <div>page1</div>
}
