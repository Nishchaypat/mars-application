import { useState } from 'react';
import Description from '../components/Description';
import MultiStageForm from '../components/MultiStageForm';
import Navbar from '../components/Navbar';

const HomePage = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const handleStart = () => {
        setFormVisible(true);
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
