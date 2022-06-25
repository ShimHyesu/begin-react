import React, { useContext } from 'react';
//UserDispatch 사용하고 싶을때 불러와서 사용
import { UserDispatch } from './App';

const User = React.memo(function User({user}) {
    //useContext Hook사용하여 만든 UserDispatch Context 조회
    const dispatch = useContext(UserDispatch);

    return(
        <div>
            <b
                style={{
                    cursor:'pointer',
                    color:user.active?'green':'black',
                }}
                onClick={()=>{
                    //User 컴포넌트에서 바로 dispatch 사용
                    dispatch({type:'TOGGLE_USER', id:user.id})
                }}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={()=>{
                //User 컴포넌트에서 바로 dispatch 사용
                dispatch({type:'REMOVE_USER',id:user.id})
            }}>삭제</button>
        </div>
    );
});

function UserList({users}) {
    return(
        <div>
            {users.map(user =>(
                <User 
                    user={user}
                    key={user.id} 
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);