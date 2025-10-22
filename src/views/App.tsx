import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Empatea from './Empatea';
import FAQ from './FAQ';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/empatea" element={<Empatea />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
        </Router>
    );
}

export default App;