import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
`;

const LayoutEffectTutorial = () => {
  const [display, setDisplay] = useState(false);
  const rectangle = useRef();

  useEffect(() => { // change to useLayoutEffect, and try to how it works.
    if (rectangle.current == null) return;
    rectangle.current.style.backgroundColor = 'green';
    rectangle.current.style.marginTop = '20px';
  }, [display]);

  return (
    <div>
      <h1>useEffect - Render Rectangle</h1>
      <div>
        <Button
          onClick={() => setDisplay(!display)}
        >
          {display ? 'Hide' : 'Show'}
        </Button>
        {display && (
          <div
            style={{ width: 100, height: 50, backgroundColor: 'red' }}
            ref={rectangle}
          />
        )}
      </div>
    </div>
  );
};

export default LayoutEffectTutorial;
