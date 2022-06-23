import React, { useEffect } from 'react';

function User({user, onRemove, onToggle}) {
    //마운트/언마운트 관리
    // useEffect(()=> {
    //     console.log('컴포넌트 화면에 나타남');
    //     return () => {
    //         console.log('컴포넌트 화면에서 사라짐');
    //     };
    // },[]);

    //deps에 특정 값 넣기
    // useEffect(() => {
    //     console.log('user값이 설정됨');
    //     console.log(user);
    //     return () =>{
    //         console.log('user가 바뀌기 전..');
    //         console.log(user);
    //     };
    // },[user]);
    useEffect(()=>{
        console.log(user);
    });

    return(
        <div>
            <b
                style={{
                    cursor:'pointer',
                    color:user.active?'green':'black',
                }}
                onClick={()=>onToggle(user.id)}
            >
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    return(
        <div>
            {users.map(user =>(
                <User 
                    user={user}
                    key={user.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;