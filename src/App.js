import React from 'react';
import Hello from './Hello.js';
//<Wrapper 쓰고 엔터 누르면 자동으로 불러와지는거 가능
import Wrapper from './Wrapper.js';

function App() {
  return (
    <Wrapper>
      {/* 이름만 넣어준것 -> true로 간주 
      <Hello name = "react" color="red" isSpecial={true} />
      */}
      <Hello name = "react" color="red" isSpecial />
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
