import React, {useCallback, useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.name]:action.value,
            }
        case 'RESET':
            return Object.keys(state).reduce((acc,current) =>{
                acc[current] = '';
                return acc;
            },{});
        default: 
            return state;
    }
}


//useState로 구현한 useInputs를 useReducer을 사용해 구현
function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e =>{
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value,
        })
    },[]);

    const reset = useCallback(()=>
        dispatch({
            type:'RESET',
        })
    ,[]);

    return [form, onChange, reset];
}

export default useInputs;