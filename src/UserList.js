import React from 'react';

function User({user}) {
    return(
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users =[
        {
            id:1,
            username:'velopert',
            email:'public.velopert@gmail.com',
        },
        {
            id:2,
            username:'tester',
            email:'tester@example.com',
        },
        {
            id:3,
            username:'sss',
            email:'sss@example.com',
        },
    ]
    return(
        <div>
            {/* 동적인 배열 렌더링을 위해 map()사용: 배열안에 있는 각 원소를 변환하여 새로운 배열로
            -> 리액트에서 배열 렌더링시 key라는 props 설정 필요함
            만약 배열 안에 고유한 원소가 없다면 map()의 두번째 파라미터 index를 key로 사용(디폴트)
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
            */}
            {users.map(user =>(
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}

export default UserList;