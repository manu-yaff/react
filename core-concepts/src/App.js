import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
	{ id: 1, title: 'Car insurance', amount: 298, date: new Date(2020, 2, 18) },
	{ id: 2, title: 'Toilet paper', amount: 890, date: new Date(2021, 2, 19) },
	{ id: 3, title: 'Books', amount: 123, date: new Date(2020, 2, 20) },
	{ id: 4, title: 'School', amount: 98, date: new Date(2019, 2, 21) },
	{ id: 5, title: 'Computer', amount: 1008, date: new Date(2019, 2, 21) },
];

const App = () => {
	const [expenses, setExpenses] = useState(dummyExpenses);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
};

export default App;
