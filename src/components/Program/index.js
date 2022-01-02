import { Table, Header, Pagination, TextFilter, Input } from '@awsui/components-react';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import moment from 'moment';

export default function Program() {
	const PAGE_SIZE = 10;

    const program = useSelector(store => store.program);

	const [page, setPage] = useState(0);
	const [filteringText, setFilteringText] = useState('');
	const [dateFrom, setDateFrom] = useState(moment().format('YYWW'));
	const [dateTo, setDateTo] = useState(dateFrom);

	if (program === undefined) {
		return null;
	}

	function setDate(value, isFrom) {
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
		if (isFrom || value < dateFrom) {
			setDateFrom(value);
		}
		if (!isFrom || value > dateTo) {
			setDateTo(value);
		}
	}

	const items = [
		{
			label: 'ETQ',
			name: 'Item 16',
			estimatedDate: '2054'
		},
		{
			label: 'ETQ',
			name: 'Item 24',
			estimatedDate: '2086'
		},
		{
			label: 'ETQ',
			name: 'Item 52',
			estimatedDate: '2093'
		},
		{
			label: 'ETQ',
			name: 'Item 16',
			estimatedDate: '2054'
		},
		{
			label: 'ETQ',
			name: 'Item 24',
			estimatedDate: '2086'
		},
		{
			label: 'ETQ',
			name: 'Item 52',
			estimatedDate: '2093'
		},
		{
			label: 'ETQ',
			name: 'Item 16',
			estimatedDate: '2054'
		},
		{
			label: 'ETQ',
			name: 'Item 24',
			estimatedDate: '2086'
		},
		{
			label: 'ETQ',
			name: 'Item 52',
			estimatedDate: '2093'
		},
		{
			label: 'ETQ',
			name: 'Item 16',
			estimatedDate: '2054'
		},
		{
			label: 'ETQ',
			name: 'Item 24',
			estimatedDate: '2086'
		},
		{
			label: 'ETQ',
			name: 'Item 52',
			estimatedDate: '2093'
		}
	].filter(
		item => filteringText === '' || 
		item.label.includes(filteringText) || 
		item.name.includes(filteringText) ||
		item.estimatedDate.includes(filteringText)
	);

    return (
        <Table
			variant='full-page'
			columnDefinitions={[
				{
					id: 'label',
					header: 'Étiquette',
					cell: item => item.label
				},
				{
					id: 'name',
					header: 'Élément',
					cell: item => item.name
				},
				{
					id: 'estimatedDate',
					header: 'Date estimée',
					cell: item => item.estimatedDate
				}
			]}
			items={items.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)}
			empty="Aucun élément"
			header={
				<Header
					counter={"(" + items.length + ")"}
					actions={
						<div style={{display: 'flex', alignItems: 'center'}}>
							<Input
								type='number'
								value={dateFrom}
								onChange={event => setDate(event.detail.value, true)}
							/>
							<span style={{margin: 10}}>à</span>
							<Input
								type='number'
								value={dateTo}
								onChange={event => setDate(event.detail.value, false)}
							/>
						</div>
					}
				>
					{program}
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
