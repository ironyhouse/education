import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [isClicked, setClicked] = useState(false);

  let clickedElement = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await resp.json();

      setUsers(data);
    };
    fetchData();
  }, []);

  const inClickUser = (event) => {
    if (clickedElement.current) {
      clickedElement.current.toggle('clickedUser');
    }
    clickedElement.current = event.currentTarget.classList;
    clickedElement.current.add('clickedUser');

    setCurrentUser(event.target.textContent);

    setClicked((state) => !state);
  };

  return (
    <div>
      {currentUser && (
        <div className="user current">Current User: {currentUser}</div>
      )}
      {users.map((item) => {
        return (
          <div key={item.id} onClick={inClickUser}>
            <span className={`user ${isClicked ? 'highlightAll' : ''}`}>
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
