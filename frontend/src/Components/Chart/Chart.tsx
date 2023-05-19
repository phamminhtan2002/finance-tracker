import {
	Chart as ChartJs,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';
import { IncomeExpensesType } from '../Income/Income';

type Props = {};

ChartJs.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
);

function Chart({}: Props) {
	const { incomes, expenses } = useGlobalContext();

	const data = {
		labels: incomes.map((income: IncomeExpensesType) => {
			const { date } = income;
			return dateFormat(date);
		}),
		datasets: [
			{
				label: 'Income',
				data: [
					...incomes.map((income) => {
						const { amount } = income;
						return amount;
					}),
				],
				backgroundColor: 'green',
			},
			{
				label: 'Expenses',
				data: [
					...expenses.map((expense) => {
						const { amount } = expense;
						return amount;
					}),
				],
				backgroundColor: 'red',
			},
		],
	};

	return (
		<ChartStyled>
			<Line data={data} />
		</ChartStyled>
	);
}

const ChartStyled = styled.div`
	background: #fcf6f9;
	border: var(--primary-border);
	box-shadow: var(--primary-box-shadow);
	border-radius: 20px;
	padding: 1rem;
	height: 100%;
`;

export default Chart;
