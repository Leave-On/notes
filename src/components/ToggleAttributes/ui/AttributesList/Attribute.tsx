import cls from './Attribute.module.scss'

interface IAtribute {
    id: string;
	  name?: string;
    status?: string;
}

interface AttributesListProps {
  className?: string;
  attribute: IAtribute;
  attributeName: string;
}

export const Attribute: React.FC<AttributesListProps> = ({className, attribute, attributeName}) => {

    return (
    <div className={cls.AttributesList}>
      <h3>{attributeName}</h3>
      <h4>{attribute.id}</h4>
      {attribute.name
        ? <p>{attribute.name}</p>
        : <p>{attribute.status}</p>
      }
    </div>
  );
}