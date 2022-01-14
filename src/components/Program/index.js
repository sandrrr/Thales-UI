import { Table, Header, Pagination, TextFilter, Input } from '@awsui/components-react';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import moment from 'moment';

export default function Program() {
	const PAGE_SIZE = 10;

    const program = useSelector(store => store.program);
    let items = useSelector(store => store.data[program]);

	const [page, setPage] = useState(0);
	const [filteringText, setFilteringText] = useState('');
	const [date, setDate] = useState(moment().format('YYWW'));

	if (program === undefined) {
		return <p style={{textAlign: 'center'}}>Please select a program</p>;
	}

	function formatDate(value) {
		value = parseInt(value);
		let year = Math.floor(value / 100);
		let week = value % 100;
		
		if (week === 0) {
			year--;
			week = moment(year, "YY").month(6).isoWeeksInISOWeekYear();
		} else if (week === moment(year, "YY").week(week - 1).isoWeeksInISOWeekYear() + 1) {
			year++;
			week = 1;
		}

		value = year * 100 + week;
		if (!moment(value, "YYWW").isValid()) return;
		setDate(value);
	}

	//TODO: after removing, change items from let to const
	items = [
		{
			info: {
				type: 'EQT',
				designation: 8
			},
			estimations: [{estimation: 1710}]
		},
		{
			info: {
				type: 'SOUS-EQT',
				designation: 14
			},
			estimations: [{estimation: 1712}]
		},
		{
			info: {
				type: 'EQT',
				designation: 38
			},
			estimations: [{estimation: 1704}]
		},
		{
			info: {
				type: 'SOUS-EQT',
				designation: 40
			},
			estimations: [{estimation: 1709}]
		},
		{
			info: {
				type: 'SOUS-EQT',
				designation: 42
			},
			estimations: [{estimation: 1730}]
		}
	]

    return (
        <Table
			variant='full-page'
			columnDefinitions={[
				{
					id: 'type',
					header: 'Type',
					cell: item => <span style={{marginLeft: item.info.type !== 'EQT' ? 20 : 0}}>{item.info.type}</span>
				},
				{
					id: 'designation',
					header: 'Designation',
					cell: item => 'Item ' + item.info.designation
				},
				{
					id: 'estimatedDate',
					header: 'Predicted date',
					cell: item => item.estimations[0]?.estimation ?? <span style={{opacity: .5}}>No prediction</span>
				}
			]}
			items={items.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)}
			empty="Aucun élément"
			header={
				<Header
					counter={"(" + items.length + ")"}
					actions={
						<Input
							type='number'
							value={date}
							onChange={event => formatDate(event.detail.value)}
						/>
					}
				>
					Prog {program}
				</Header>
			}
			pagination={
				<Pagination
					currentPageIndex={page + 1}
					pagesCount={Math.ceil(items.length / PAGE_SIZE)}
					onPreviousPageClick={() => setPage(page - 1)}
					onNextPageClick={() => setPage(page + 1)}
					onChange={event => setPage(event.detail.currentPageIndex - 1)}
				/>
			}
			filter={
				<TextFilter
					filteringPlaceholder='Filtrer'
					filteringText={filteringText}
					onChange={event => setFilteringText(event.detail.filteringText)}
				/>
			}
		/>
    )
}
