import React, { useRef, useState} from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';


function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });

  const {username, email}=inputs;

  const onChange = e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users,setUsers] = useState([
    {
        id:1,
        username:'velopert',
        email:'public.velopert@gmail.com',
        active:true,
    },
    {
        id:2,
        username:'tester',
        email:'tester@example.com',
        active:false,
    },
    {
        id:3,
        username:'sss',
        email:'sss@example.com',
        active:true,
    },
  ]);

  //useRef: 컴포넌트에서 변경할 수 있는 변수 관리 -> 설정 후 바로 조회 가능
  //파라미터 -> .current의 기본값
  const nextId = useRef(4);

  //배열에 항목 추가 -> 불변성 지키기
  const onCreate =() => {
    const user={
      id:nextId.current,
      username,
      email,
    };
    //방법1: spread 연산자 ...
    //setUsers([...users,user]);

    //방법2: concat함수
    setUsers(users.concat(user));
    
    setInputs({
      username: '',
      email:'',
    });
    nextId.current += 1;
  };

  //배열 항목 삭제 -> 불변성 지키기
  const onRemove = id => {
    //방법: filter 배열 내장함수 사용
    //user.id가 파라미터로 일치하지 않는 원소만 추출하여 새로운 배열 생성
    //= user.id가 id인 것 제거
    setUsers(users.filter(user => user.id != id));
  };

  //배열 항목 수정 -> 불변성 지키기
  const onToggle = id => {
    //방법: map함수 사용
    setUsers(
      users.map(user => 
        user.id===id?{...user,active:!user.active}:user
        )
      );
  };

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
