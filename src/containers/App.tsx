import { useEffect, useState, ChangeEvent } from 'react';
import SearchBox from '../components/search_box/SearchBox';
import CardList from '../components/card_list/CardList';
import { getData } from '../utils/data.utils'

import styles from './App.module.css';

export type Robot = {
  id: string;
  name: string;
  email: string;
}


function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [robots, setRobots] = useState<Robot[]>([]);

	useEffect(() => {
    const fetchUserData = async () => {
      const users = await getData<Robot[]>('https://jsonplaceholder.typicode.com/users');
      setRobots(users)
    }
    fetchUserData();
	}, []);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {    
		setSearchTerm(e.target.value);
	};


	const filteredRobots = robots.filter((item) =>
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
					<CardList robots={filteredRobots} />
				</div>
			</main>
		</>
	);
}

export default App;
