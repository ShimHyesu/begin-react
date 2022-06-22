import React, {useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    //비구조화 할당을 통해 값 추출
    const {name, nickname} = inputs;

    const onChange =(e)=> {
        const {value, name} = e.target;
        setInputs({
            ...inputs, //기존의 input 객체 복사한 뒤,
            [name]:value, // name키를 가진 값을 value로 설정
        });
    };
    const onReset =()=> {
        setInputs({
            name:'',
            nickname:'',
        })
    };

    return(
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name} />
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );   
}

export default InputSample;