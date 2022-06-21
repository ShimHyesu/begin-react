import React from 'react';

//children -> wrapper태그 사용시 그 사이에 넣은 값 조회할때 사용
function Wrapper({children}) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>{children}</div>
  )
}

export default Wrapper;