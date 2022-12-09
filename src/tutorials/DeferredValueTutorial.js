import React, { useState, useMemo, useDeferredValue } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  height: 200px;
  overflow-y: auto;
  border: 1px solid #eee;
`;

const MAX_COUNT = 10000;

export default function DeferredTutorial() {
  const [name, setName] = useState("");
  const value = useDeferredValue(name);
  const list = useMemo(() => {
    if (!value) {
      return [];
    }

    const arr = [];
    for (let k = 0; k < MAX_COUNT; k++) {
      const id = k.toString();
      if (id.includes(value)) {
        arr.push({
          id,
          name: `name_${k}`,
        })
      }
    }
    return arr;
  }, [value]);

  return (
    <>
      <input type="text" placeholder="please input a number" value={name} onChange={e => setName(e.target.value)} />
      {list.length > 0 && <ListContainer>
        {list.map(item => <div key={item.id}>{item.name}</div>)}
      </ListContainer>}
    </>
  );
}