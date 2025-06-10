import { Robot } from '../../containers/App'
import Card from '../card/Card';

type CardListProps = {
  robots: Robot[]
}

const CardList = ({ robots }: CardListProps) => {
	return (
		<>
			{robots.map((robot) => (
				<Card key={robot.id} robot={robot} />
			))}
		</>
	);
};

export default CardList;
