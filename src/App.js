import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Parent from './assests/Parent_layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Parent />} />
      </Routes>
    </Router>
  );
}

export default App;
