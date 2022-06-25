import React,{useReducer} from 'react';

//reducer함수: 현재 상태와 액션 객체를 파라미터로 받아와 새로운 상태로 반환
function reducer (state, action) {
    switch (action.type) {
        case 'INCREAMENT':
            return state + 1;
        case 'DECREAMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease =()=> {
        dispatch({type:'INCREAMENT'});
    }
    const onDecrease =()=> {
        dispatch({type:'DECREAMENT'});
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;