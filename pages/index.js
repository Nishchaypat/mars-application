import { useState } from 'react';
import Description from '../components/Description';
import MultiStageForm from '../components/MultiStageForm';
import Navbar from '../components/Navbar';

const HomePage = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleStart = () => {
        setFormVisible(true); // Show the MultiStageForm when the button is clicked
    };

    return (
        <div className="container">
            <Navbar />
            {!isFormVisible ? (
                <Description onStart={handleStart} />
            ) : (
                <MultiStageForm />
            )}
        </div>
    );
};

export default HomePage;
