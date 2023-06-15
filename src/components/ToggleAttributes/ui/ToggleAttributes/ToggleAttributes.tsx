import { useGetStatusesQuery, useGetPrioritiesQuery, getStatusesResult, getPropertiesResult } from 'app/api/notesApi';
import { useState } from 'react';
import { Attribute } from '../Attribute/Attribute';
import cls from './ToggleAttributes.module.scss'

interface ToggleAttributesProps {
  className?: string;
}

export const ToggleAttributes = ({className}: ToggleAttributesProps) => {

    const [isAttributesVisible, setIsAttributesVisible] = useState(false)
    const {data: statusList} = useGetStatusesQuery()
	const {data: priorityList} = useGetPrioritiesQuery()

    const toggleAttributes  = () => {
        setIsAttributesVisible(prev => !prev)
    }

    return (
    <div className={className}>
        <button onClick={toggleAttributes}>Show these numbers meaning</button>
        {isAttributesVisible
        && <div className={cls.attributes_container}>
                <div className={cls.attribute_item}>
                    <h3>Status:</h3>
                    {statusList.map((status: getStatusesResult) => (
                        <Attribute key={status.id} attribute={status} />
                    ))}
                </div>
                <div className={cls.attribute_item}>
                    <h3>Priority:</h3>
                    {priorityList.map((priority: getPropertiesResult) => (
                        <Attribute key={priority.id} attribute={priority} />
                    ))}
                </div>
            </div>
        }
    </div>
  );
}