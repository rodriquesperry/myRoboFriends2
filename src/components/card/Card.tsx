import { Robot } from '../../containers/App';

type CardProps = {
	robot: Robot,
};

const Card = ({ robot }: CardProps) => {
  const { email, name, id } = robot;
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?100x100`} alt='robots' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
