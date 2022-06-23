import React, { useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';

//active값이 true인 사용자 수 세어서 화면에 렌더링
function countActiveUsers(users){
  console.log('활성 사용자 수 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });

  const {username, email}=inputs;

  const onChange = useCallback(e =>{
    const {name, value} = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]:value
    }));
  },[]);

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

  const nextId = useRef(4);

  //배열에 항목 추가
  //useCallback Hook -> 함수 재사용
  const onCreate = useCallback(() => {
    const user={
      id:nextId.current,
      username,
      email,
    };
    //함수형 업데이트를 통해 deps에서 users를 참조하지 않도록 함
    //users가 바뀔때마다 리렌더링 되지 않도록
    setUsers(users => users.concat(user));
    
    setInputs({
      username: '',
      email:'',
    });
    nextId.current += 1;
  },[username,email]);

  //배열 항목 삭제
  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id != id));
  },[]);

  //배열 항목 수정
  const onToggle = useCallback(id => {
    setUsers(users => (
      users.map(user => 
        user.id===id?{...user,active:!user.active}:user
        )
      ));
  },[]);

  //const count = countActiveUsers(users);
  //input값 바뀔 때에도 컴포넌트가 리렌더링됨 -> 자원 낭비
  //useMemo: 이전 계산한 값 재사용
  const count = useMemo(() => countActiveUsers(users),[users]);

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
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
