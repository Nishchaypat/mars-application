// App.js

import { useState } from 'react';
import Description from '../components/Description';
import MultiStageForm from '../components/MultiStageForm';
import Navbar from '../components/Navbar';

const App = () => {
    const [currentPage, setCurrentPage] = useState('description');

    const handleStart = () => {
        setCurrentPage('multiStageForm');
    };

    const handleBackToDescription = () => {
        setCurrentPage('description');
    };

    return (
        <>
            <Navbar />
            {currentPage === 'description' && <Description onStart={handleStart} />}
            {currentPage === 'multiStageForm' && <MultiStageForm onBack={handleBackToDescription} />}
        </>
    );
};

export default App;
