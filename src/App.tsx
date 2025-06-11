import './App.css';
import Greeting from './components/Greeting';
import UserList from './components/UserList';
import CustomButton from './components/CustomButton';
import MessageParent from './components/MessageParent';

const App = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <main className="app">
      <header className="header">
        <h1>React + Vite Assignment Showcase</h1>
        <p className="subtitle">Components and Props Demo</p>
      </header>

      <section className="card">
        <h2>👋 Greeting</h2>
        <Greeting name="John" timeOfDay="morning" />
      </section>

      <section className="card">
        <h2>📋 User List</h2>
        <UserList users={users} />
      </section>

      <section className="card">
        <h2>🔘 Custom Button</h2>
        <CustomButton label="Click Me" onClick={handleClick} />
      </section>

      <section className="card">
        <h2>🔁 Parent → Child</h2>
        <MessageParent />
      </section>
    </main>
  );
};

export default App;
