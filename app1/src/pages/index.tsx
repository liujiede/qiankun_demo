import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useRootExports } from 'umi';
import styles from './index.less';

function noop() {
  return function() {};
}
export default () => {
  const { bindOnChange = noop, setData = noop } = useRootExports() ?? {};
  const [value, setValue] = useState('');
  useEffect(() => {
    const unBind = bindOnChange((data: any) => {
      console.log('root exports data change:', data);
    });
    return () => unBind();
  }, []);
  return (
    <div>
      <h1 className={styles.title}>app1 umi home 1</h1>
      {/* <Link to="/page1">page1</Link> */}
      <br />
      {/* <Link to="/page2">page2</Link> */}
      <br />
      <label>
        set root exports data {value}
        <br />
        <input
          type="text"
          onChange={({ currentTarget }) => {
            setValue(currentTarget.value);
          }}
        />
      </label>
      {/*<Link to="/">go back</Link>*/}
    </div>
  );
};

ReactDOM.render(<div>app1</div>, document.getElementById('root'));
