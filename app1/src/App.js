import React, {Suspense, useState} from "react";
const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => {
  const styles = {
    container: {
      display: 'flex',
      fontFamily: 'Arial, Helvetica',
      flexDirection: 'column',
      alignItems: 'center'
    },
    ctaWrapper: {
      display: 'flex',
      gap: '20px',
    },
    count: {
      fontWeight: 'normal',
      color: 'green'
    }
  };
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const ResetCount = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Count: <span style={styles.count}>{count}</span> </h1>
      <div style={styles.ctaWrapper}>
        <Suspense fallback={"loading..."}>
          <RemoteButton action={incrementCount} label="+" />
          <RemoteButton action={ResetCount} label="&#8634;" />
          <RemoteButton action={decrementCount} label="-" />
        </Suspense>
      </div>
    </div>)
}

export default App;
