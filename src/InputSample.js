import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');

    //이벤트 객체e를 파라미터로 받아와 사용
    //e.target은 이벤트가 발생한 input DOM을 가리키게 됨
    //이 DOM의 value값: e.target.value를 조회하면 현재 input 입력한 값 확인 가능
    const onChange =(e)=> {
        setText(e.target.value);
    };
    const onReset =()=> {
        setText('');
    };

    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );   
}

export default InputSample;