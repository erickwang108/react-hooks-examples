import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  margin: 12px;
  padding: 12px;
  border: 1px solid #aaa;
  background-color: #eee;
  border-radius: 4px;
`;

const ImperativeTutorial = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    clickMe: () => { setCount(cnt => cnt + 1) }
  }));

  return (
    <Container>
      Count: {count}
    </Container>
  );
});

export default ImperativeTutorial;
