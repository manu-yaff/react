import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const selectYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onSelectYear={selectYearHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList expenses={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
