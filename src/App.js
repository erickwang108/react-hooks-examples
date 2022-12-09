import React, { useRef } from 'react';
import styled from 'styled-components';
import ReducerTutorial from './components/ReducerTutorial';
import ImperativeTutorial from './components/ImperativeTutorial';
import LayoutEffectTutorial from './components/LayoutEffectTutorial';

const AppContainer = styled.div`
  margin: 12px;
`;

function App() {
  const ref = useRef(null);

  return (
    <AppContainer>
      <h1>useReducer</h1>
      <ReducerTutorial />
      <h1>useImperative</h1>
      <ImperativeTutorial ref={ref} />
      <button onClick={() => { ref.current.clickMe() }}>Click Me</button>
      <h1>useLayoutEffect</h1>
      <LayoutEffectTutorial />
    </AppContainer>
  );
}

export default App;
