import { useEffect } from 'react';
import "@awsui/global-styles/index.css";
import { useDispatch } from 'react-redux';
import { API } from '../../utils/api';

function groupResultByProgram(res) {
  return res.reduce((obj, elem) => ({
    ...obj,
    [elem.info.program]: [
        ...(obj[elem.info.program] ?? []),
        elem
    ]
  }), {});
}

function Data(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    API.getAll().then(res => 
      dispatch({type: 'data/init', value: groupResultByProgram(res)}
    ));
  }, [dispatch]);
  
  return props.children;
}

export default Data;
