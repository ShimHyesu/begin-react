import React,{useState} from 'react';

function Counter() {
    //useState(상태의 기본값)
    // 첫번째 원소-> 현재 상태, 두번째 원소 -> Setter함수
    const [number, setNumber] = useState(0);

    const onIncrease =()=> {
        //console.log('+1')
        //setNumber(number+1);

        //함수형 업데이트
        setNumber(prevNumber => prevNumber+1);
    }
    const onDecrease =()=> {
        //console.log('-1')
        //setNumber(number-1);

        //함수형 업데이트
        setNumber(prevNumber => prevNumber-1);

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