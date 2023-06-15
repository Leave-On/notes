import cls from './Attribute.module.scss';

interface IAtribute {
	id: string;
	name?: string;
	status?: string;
}

interface AttributesListProps {
	attribute: IAtribute;
}

export const Attribute: React.FC<AttributesListProps> = ({ attribute }) => {
	return (
		<div className={cls.attribute}>
			<h4>{attribute.id}</h4>
			{attribute.name ? (
				<p>{attribute.name}</p>
			) : (
				<p>{attribute.status}</p>
			)}
		</div>
	);
};
