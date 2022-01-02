import { Select } from '@awsui/components-react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import ThalesLogo from '../../images/ThalesLogo.png';

export default function Header() {
    const program = useSelector(store => store.program);
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <img style={{width: "200px"}} src={ThalesLogo} alt="thalesLogo"/>
            <h2 style={{textAlign: 'center'}}>Prévision de la date de livraison des composants</h2>
            <Select
                placeholder='Programme'
                filteringType='auto'
                selectedOption={program !== undefined ? {value: program} : undefined}
                onChange={(event) => dispatch({type: 'program/change', value: event.detail.selectedOption.value})}
                options={['Prog 16', 'Prog 54', 'Prog 78', 'Prog 106'].map(text => ({
                    value: text
                }))}
            />
        </div>
    )
}
