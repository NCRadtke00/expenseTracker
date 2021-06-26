import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
const App = () => {
  const expenses = [
    {
      id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),
    },
    {
      id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)
    },
    {
      id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28),
    },
    {
      id: 'e4', title: 'New Desk (Wooden)', amount: 434.67, date: new Date(2021, 5, 12),
    },
  ]; //this is props concept, super important. props = properties that we set. we want to store data here so components can be completely reuseable 
  
  //old way of doing react projects 
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  
  return (
    <div className="App">
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
