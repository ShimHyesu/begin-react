import React from 'react';
import Hello from './Hello.js';
//<Wrapper 쓰고 엔터 누르면 자동으로 불러와지는거 가능
import Wrapper from './Wrapper.js';

function App() {
  return (
    <Wrapper>
      <Hello name = "react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
