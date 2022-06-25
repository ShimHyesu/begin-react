import React, { useCallback, useMemo, useReducer, useRef } from 'react';

import CreateUser from './CreateUser';
import UserList from './UserList';

//활성 사용자 수 구하는 함수
function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
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

//reducer: 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태로 반환
//→ 컴포넌트가 지닐 새로운 상태
//action객체: 업데이트를 위한 정보
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT': 
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]:action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs:initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users:state.users.map(user => 
          user.id===action.id?{...user, active:!user.active}:user)
      };
    case 'REMOVE_USER' :
      return {
        ...state,
        users:state.users.filter(user => user.id!==action.id)
      };
    default:
      return state;
  }

}

function App() {
  //useReducer: 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리
  //state: 컴포넌트에서 사용할 수 있는 상태
  //dispatch: 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const {users} = state;
  const {username, email} = state.inputs;

  const count = useMemo(()=>countActiveUsers(users),[users]);

  //input값 변경
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  },[]);

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