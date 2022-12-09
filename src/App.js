import React, { useRef, useMemo, useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import ReducerTutorial from './components/ReducerTutorial';
import DeferredValueTutorial from './components/DeferredValueTutorial';
import DebugValueTutorial from './components/DebugValueTutorial';
import ImperativeTutorial from './components/ImperativeTutorial';
import LayoutEffectTutorial from './components/LayoutEffectTutorial';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function App() {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const items = useMemo(() => {
    return [{
      label: 'userDeferredValue',
      component: <DeferredValueTutorial />
    }, {
      label: 'useReducer',
      component: <ReducerTutorial />,
    }, {
      label: 'useImperative',
      component: (<>
        <ImperativeTutorial ref={ref} />
        <button onClick={() => { ref.current.clickMe() }}>Click Me</button>
      </>),
    }, {
      label: 'useLayoutEffect',
      component: <LayoutEffectTutorial />,
    }, {
      label: 'useDebugValue',
      component: <DebugValueTutorial />,
    }]
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {items.map(({ label }, index) => (<Tab key={index} label={label} />))}
        </Tabs>
      </Box>
      {items.map(({ component }, index) => (
        <TabPanel key={index} value={value} index={index}>
          {component}
        </TabPanel>
      ))}
    </Box>
  );
}
