import React, { useCallback, useMemo, useReducer, useRef } from 'react';

import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';
import UserList from './UserList';

//활성 사용자 수 구하는 함수
function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users:[
    {
      id:1,
      username:'velopert',
      email:'public.velopert@gmail.com',
      active:true,
    },
    {
      id:2,
      username:'hyesu',
      email:'hyesu@gmail.com',
      active:false,
    },
    {
      id:3,
      username:'example',
      email:'example@ggg.com',
      active:true,
    },
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        users:state.users.map(user => 
          user.id===action.id?{...user, active:!user.active}:user)
      };
    case 'REMOVE_USER' :
      return {
        users:state.users.filter(user => user.id!==action.id)
      };
    default:
      return state;
  }

}

function App() {

  //useInputs라는 커스텀 Hook 사용
  const [{username, email}, onChange, reset] = useInputs({
    username:'',
    email:'',
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const {users} = state;



  const count = useMemo(()=>countActiveUsers(users),[users]);

  //사용자 등록
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id:nextId.current,
        username,
        email,
      }
    });
    reset();
    nextId.current+=1;
  },[username, email]);

  //활성 사용자 변경
  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  },[]);

  //배열 항목 삭제
  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  },[]);

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
      <div>활성사용자 수: {count}</div>
    </>
  );
}

export default App;