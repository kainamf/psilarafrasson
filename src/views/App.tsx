import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Empatea from './Empatea';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/empatea" element={<Empatea />} />
            </Routes>
        </Router>
    );
}

export default App;