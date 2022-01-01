import React from 'react';
import './DropDownPart.css';
import Select from 'react-select';

export default function DropDownPart(props) {
    const options = [
        { value: 'prog12', label: 'Prog12' },
        { value: 'prog23', label: 'Prog23' },
        { value: 'prog34', label: 'Prog34' },
        { value: 'prog45', label: 'Prog45' },
        { value: 'prog56', label: 'Prog56' },
        { value: 'prog121', label: 'Prog121' },
        { value: 'prog231', label: 'Prog231' },
        { value: 'prog341', label: 'Prog341' },
        { value: 'prog451', label: 'Prog451' },
        { value: 'prog561', label: 'Prog561' }
    ]
    return (
        <div className="select">
            <Select options={options} />
        </ div>
    )
}