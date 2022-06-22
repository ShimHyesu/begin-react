import React, {useRef, useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    //함수형 컴포넌트에서 ref객체 사용할 때 useRef라는 Hook함수 사용
    const nameInput = useRef();

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
        });
        //Ref객체의 .current값은 우리가 원하는 DOM 가리키게 됨
        nameInput.current.focus();
    };

    return(
        <div>
            {/*ref객체를 우리가 선택하고 싶은 DOM에 ref값으로 설정*/}
            <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
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