import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

//created controlled component meaning its passes on to parent component
//state vs stateless component (smart vs dumb) typically will have more "dumb" components
//This component is a state less component also called presentational or dumb component because it doesn't have any internal state it's just there to output some data.
//So even though dumb might sound negative and it might sound like stateful components are better, that's not the case. These are really just terms and typically you end up with less state full components than with state less components. Because you wanna split up your application into small reusable pieces and most pieces, most components indeed will only focus on outputting something, on having some JSX code, maybe some transformation logic like this here and maybe some CSS code, but it's only a couple of components which typically do manage state.


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses
