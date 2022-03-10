import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import { List } from "./components/List"

export interface IState {
  people: {
    name: string
    id: number
    url: string
    position?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([{
    name: "John Doe",
    url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    id: 1,
    position: "Finance Manager",
  }])

  return (
    <div className="App">
      <h1>Employee list</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;

// {
//   name: "John Doe",
//   url: "",
//   id: "1",
//   position: "Finance Manager",
// },
// {
//   name: "John Doe",
//   url: "",
//   id: "2",
//   position: "Head of People",
// },
