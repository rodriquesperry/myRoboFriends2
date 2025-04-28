import Card from '../card/Card';

const CardList = ({ data }) => {
	return (
		<>
			{data.map((robot) => (
				<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
			))}
		</>
	);
};

export default CardList;
