import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';

//created controlled component meaning its passes on to parent component
//state vs stateless component (smart vs dumb) typically will have more "dumb" components
//This component is a state less component also called presentational or dumb component because it doesn't have any internal state it's just there to output some data.
//So even though dumb might sound negative and it might sound like stateful components are better, that's not the case. These are really just terms and typically you end up with less state full components than with state less components. Because you wanna split up your application into small reusable pieces and most pieces, most components indeed will only focus on outputting something, on having some JSX code, maybe some transformation logic like this here and maybe some CSS code, but it's only a couple of components which typically do manage state.


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
        </div>
    )
}

export default Expenses
