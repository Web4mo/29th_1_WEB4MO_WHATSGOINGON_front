import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './components/q_1/q_1';
import Q_2_0 from './components/q_2/q_2_0';
import Q_2_1 from './components/q_2/q_2_1';
import Q_2_2 from './components/q_2/q_2_2';
import Q_2_3 from './components/q_2/q_2_3';
import Q_2_4 from './components/q_2/q_2_4';
import Q_2_5 from './components/q_2/q_2_5';
import Q_2_6 from './components/q_2/q_2_6';
import Q_2_7 from './components/q_2/q_2_7';
import Q_3 from './components/q_2/q_3';
import CAL from './components/cal/calendar';
import MAIN_4 from './components/main/main_4';
import MAIN_3 from './components/main/main_3';
import TestResult from './components/q_2/test_result';
import reportWebVitals from './reportWebVitals';

const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/q_2/q_2_0" element={<Q_2_0 />} />
        <Route path="/q_2/q_2_1" element={<Q_2_1 />} />
        <Route path="/q_2/q_2_2" element={<Q_2_2 />} />
        <Route path="/q_2/q_2_3" element={<Q_2_3 />} />
        <Route path="/q_2/q_2_4" element={<Q_2_4 />} />
        <Route path="/q_2/q_2_5" element={<Q_2_5 />} />
        <Route path="/q_2/q_2_6" element={<Q_2_6 />} />
        <Route path="/q_2/q_2_7" element={<Q_2_7 />} />
        <Route path="/q_2/q_3" element={<Q_3 />} />
        <Route path="/cal/calendar" element={<CAL />} />
        <Route path="/q_2/test_result" element={<TestResult />} />
        <Route path="/main/main_4" element={<MAIN_4 />} />
        <Route path="/main/main_3" element={<MAIN_3 />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
