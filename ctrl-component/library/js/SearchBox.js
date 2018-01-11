'use strict';

const SearchBox = ({value, filterBooks}) => {
	return (
		<input type="text" placeholder="Поиск по названию или автору" value={value} onChange={(evt) => filterBooks(evt.currentTarget.value)}/>
	);
};