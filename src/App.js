import React, { useState } from 'react';
import Tweet from './tweet';

function App() {
  const [users, setUser] = useState([
    { name: ' Carson', message: "Whats up", likes: '1,000,000' },
    { name: 'fathead', message: "hello mate", likes: '10,000' }
  ])
  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }
  return (
    <div className="App">
      {users.map(users => (
        <Tweet name={users.name} message={users.message} likes={users.likes} />
      ))}



      {/* <Tweet name="CLout" message='I finally did it!' likes="1,000" />
      <Tweet name="Bolt" message='My fart stinks' likes="100,000" />
      <Tweet name="Ace" message='How can I be annoying today' likes="-9,000" />
      <Tweet name="Cars" message='fast FaSt FAST' likes="800" /> */}

      <h1 className={isRed ? 'red' : ""}>Change the color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
