import { useGetStatusesQuery, useGetPrioritiesQuery, getStatusesResult, getPropertiesResult } from 'app/api/notesApi';
import { useState } from 'react';
import { Attribute } from '../AttributesList/Attribute';
import cls from './ToggleAttributes.module.scss'

interface ToggleAttributesProps {
  className?: string;
}

export const ToggleAttributes = ({className}: ToggleAttributesProps) => {

    const [isAttributesVisible, setIsAttributesVisible] = useState(false)
    const {data: statusList} = useGetStatusesQuery()
	const {data: priorityList} = useGetPrioritiesQuery()
	console.log('getstatus', statusList);
	console.log('getPriority', priorityList);

    const toggleAttributes  = () => {
        setIsAttributesVisible(prev => !prev)
    }

    return (
    <div className={className}>
        <button onClick={toggleAttributes}>Show these number meaning</button>
        {isAttributesVisible && <div>
            <div>
                {statusList.map((status: getStatusesResult) => (
                    <Attribute key={status.id} attribute={status} attributeName='Status' />
                ))}
            </div>
            <div>
                {priorityList.map((priority: getPropertiesResult) => (
                    <Attribute key={priority.id} attribute={priority}  attributeName='Priority'/>
                ))}
            </div>
        </div>}
    </div>
  );
}