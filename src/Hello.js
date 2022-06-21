import React from 'react';

//props대신 구조분해를 이용하여 color와 name추출
function Hello({color, name, isSpecial}) {
    //console.log(props);
    return (
        <div style={{
            color,
        }}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

//기본값 설정
Hello.defaultProps = {
    name: '이름 없음',
};

export default Hello;