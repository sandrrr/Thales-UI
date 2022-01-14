import { Select } from '@awsui/components-react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import ThalesLogo from '../../images/ThalesLogo.png';

export default function Header() {
    const program = useSelector(store => store.program);
    const programs = useSelector(store => Object.keys(store.data));

    const dispatch = useDispatch();

    const OPTION_PREFIX = 'Prog ';

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <img style={{width: "200px"}} src={ThalesLogo} alt="thalesLogo"/>
            <h2 style={{textAlign: 'center'}}>Component Delivery Date Prediction</h2>
            <Select
                placeholder='Program'
                filteringType='auto'
                selectedOption={program !== undefined ? {value: OPTION_PREFIX + program} : undefined}
                onChange={(event) => dispatch({type: 'program/change', value: event.detail.selectedOption.value.substring(OPTION_PREFIX.length)})}
                options={programs.map(text => ({
                    value: OPTION_PREFIX + text
                }))}
            />
        </div>
    )
}
