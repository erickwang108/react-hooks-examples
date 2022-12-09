import React, { useRef, useState } from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import ReducerTutorial from './components/ReducerTutorial';
import DeferredTutorial from './components/DeferredTutorial';
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="useDeferredValue" />
          <Tab label="useReducer" />
          <Tab label="useImperative" />
          <Tab label="useLayoutEffect" />
          <Tab label="useDebugValue" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DeferredTutorial />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReducerTutorial />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ImperativeTutorial ref={ref} />
        <button onClick={() => { ref.current.clickMe() }}>Click Me</button>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LayoutEffectTutorial />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DebugValueTutorial />
      </TabPanel>
    </Box>
  );
}
