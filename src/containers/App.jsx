import React, { useEffect, useState } from 'react';
import SearchBox from '../components/search_box/SearchBox';
import CardList from '../components/card_list/CardList';
// import { robots } from './robots';
import axios from 'axios';

import styles from './App.module.css';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getData = async () => {
			await axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then((response) => {
					setItems(response.data);
				});
		};
		getData();
	}, []);

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<header className={styles.header}>
				<h1>MyRoboFriends</h1>
				<SearchBox handleSearch={handleSearch} />
			</header>
			<main className={styles.main_container}>
				<div className={styles.class_list}>
					<CardList data={filteredItems} searchTerm={searchTerm} />
				</div>
			</main>
		</>
	);
}

export default App;
