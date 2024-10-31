// components/MultiStageForm.js

import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from '../styles/MultiStageForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MultiStageForm = ({ onBack }) => { // Accept onBack prop
    const { control, handleSubmit, formState: { errors }, trigger, getValues, setError, reset } = useForm({ mode: 'onChange' });
    const [stage, setStage] = useState(0);
    const [submissionMessage, setSubmissionMessage] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        setSubmissionMessage('Form submission successful!');
        reset();
        setStage(0);
        setTimeout(() => setSubmissionMessage(''), 3000);
    };

    const nextStage = async () => {
        const isCurrentStageValid = await trigger(getStageFields(stage));

        if (isCurrentStageValid) {
            if (stage === 1) {
                const { dob, departureDate, returnDate } = getValues();
                const dobDate = new Date(dob);
                const departureDateObj = new Date(departureDate);
                const returnDateObj = new Date(returnDate);
                const minDepartureDate = new Date(dobDate);
                minDepartureDate.setFullYear(minDepartureDate.getFullYear() + 25);
                const minReturnDate = new Date(departureDateObj);
                minReturnDate.setFullYear(minReturnDate.getFullYear() + 2);

                if (departureDateObj < minDepartureDate) {
                    setError('departureDate', { type: 'manual', message: 'Departure date must be at least 25 years after DOB' });
                    return;
                }

                if (returnDateObj < minReturnDate) {
                    setError('returnDate', { type: 'manual', message: 'Return date must be at least 2 years after departure date' });
                    return;
                }

                if (departureDateObj >= returnDateObj) {
                    setError('returnDate', { type: 'manual', message: 'Return date must be after departure date' });
                    return;
                }
            }
            setStage(stage + 1);
        }
    };

    const prevStage = () => {
        if (stage > 0) setStage(stage - 1);
    };

    const getStageFields = (stage) => {
        switch (stage) {
            case 0:
                return ['fullName', 'dob', 'nationality', 'email', 'phone'];
            case 1:
                return ['departureDate', 'returnDate', 'accommodation'];
            case 2:
                return ['healthDeclaration', 'emergencyContact'];
            default:
                return [];
        }
    };

    useEffect(() => {
        setStage(0);
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.formTitle}>Application Form</h2>
            {stage === 0 && submissionMessage && <div className={styles.successMessage}>{submissionMessage}</div>}
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
                {stage === 0 && (
                    <div className={styles.stage}>
                        <h2><FontAwesomeIcon icon={faUser} /> Stage 1: Personal Information</h2>
                        <label className={styles.label}>
                            Full Name
                            <Controller
                                name="fullName"
                                control={control}
                                rules={{ required: 'Full Name is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.fullName ? styles.errorInput : styles.input}
                                        type="text"
                                    />
                                )}
                            />
                            {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
                        </label>
                        <label className={styles.label}>
                            Date of Birth
                            <Controller
                                name="dob"
                                control={control}
                                rules={{ required: 'Date of Birth is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.dob ? styles.errorInput : styles.input}
                                        type="date"
                                    />
                                )}
                            />
                            {errors.dob && <span className={styles.error}>{errors.dob.message}</span>}
                        </label>
                        <label className={styles.label}>
                            Nationality
                            <Controller
                                name="nationality"
                                control={control}
                                rules={{
                                    required: 'Nationality is required',
                                    pattern: {
                                        value: /^[A-Za-z]+$/,
                                        message: 'Nationality must contain only alphabets',
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.nationality ? styles.errorInput : styles.input}
                                        type="text"
                                    />
                                )}
                            />
                            {errors.nationality && <span className={styles.error}>{errors.nationality.message}</span>}
                        </label>
                        <label className={styles.label}>
                            Contact Information
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Email is not valid'
                                    }
                                }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.email ? styles.errorInput : styles.input}
                                        type="email"
                                    />
                                )}
                            />
                            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                        </label>
                        <label className={styles.label}>
                            Phone
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: 'Phone is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Phone number must be 10 digits'
                                    }
                                }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.phone ? styles.errorInput : styles.input}
                                        type="tel"
                                    />
                                )}
                            />
                            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                        </label>
                    </div>
                )}
                {stage === 1 && (
                    <div className={styles.stage}>
                        <h2><FontAwesomeIcon icon={faCalendarAlt} /> Stage 2: Travel Preferences</h2>
                        <label className={styles.label}>
                            Departure Date
                            <Controller
                                name="departureDate"
                                control={control}
                                rules={{ required: 'Departure Date is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.departureDate ? styles.errorInput : styles.input}
                                        type="date"
                                    />
                                )}
                            />
                            {errors.departureDate && <span className={styles.error}>{errors.departureDate.message}</span>}
                        </label>
                        <label className={styles.label}>
                            Return Date
                            <Controller
                                name="returnDate"
                                control={control}
                                rules={{ required: 'Return Date is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.returnDate ? styles.errorInput : styles.input}
                                        type="date"
                                    />
                                )}
                            />
                            {errors.returnDate && <span className={styles.error}>{errors.returnDate.message}</span>}
                        </label>
                        <label className={styles.label}>
                            Accommodation Preference
                            <Controller
                                name="accommodation"
                                control={control}
                                rules={{ required: 'Accommodation Preference is required' }}
                                render={({ field }) => (
                                    <select {...field} className={errors.accommodation ? styles.errorInput : styles.select}>
                                        <option value="">Select...</option>
                                        <option value="Space Hotel">Space Hotel</option>
                                        <option value="Martian Base">Martian Base</option>
                                    </select>
                                )}
                            />
                            {errors.accommodation && <span className={styles.error}>{errors.accommodation.message}</span>}
                        </label>
                        <label className={styles.label}>
                            Special Requests
                            <Controller
                                name="specialRequests"
                                control={control}
                                render={({ field }) => (
                                    <textarea
                                        {...field}
                                        className={styles.textarea}
                                        placeholder="Any special requests..."
                                    />
                                )}
                            />
                        </label>
                    </div>
                )}
                {stage === 2 && (
                    <div className={styles.stage}>
                        <h2><FontAwesomeIcon icon={faPaperPlane} /> Stage 3: Final Steps</h2>
                        <label className={styles.label}>
                            Health Declaration
                            <Controller
                                name="healthDeclaration"
                                control={control}
                                rules={{ required: 'Health Declaration is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.healthDeclaration ? styles.errorInput : styles.input}
                                        type="text"
                                    />
                                )}
                            />
                            {errors.healthDeclaration && <span className={styles.error}>{errors.healthDeclaration.message}</span>}
                        </label>
                        <label className={styles.label}>
                            Emergency Contact
                            <Controller
                                name="emergencyContact"
                                control={control}
                                rules={{ required: 'Emergency Contact is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        className={errors.emergencyContact ? styles.errorInput : styles.input}
                                        type="text"
                                    />
                                )}
                            />
                            {errors.emergencyContact && <span className={styles.error}>{errors.emergencyContact.message}</span>}
                        </label>
                    </div>
                )}
                <div className={styles.buttonContainer}>
                    {stage > 0 && <button type="button" className={styles.button} onClick={prevStage}>Back</button>}
                    {stage < 2 ? (
                        <button type="button" className={styles.button} onClick={nextStage}>Next</button>
                    ) : (
                        <button type="submit" className={styles.button}>Submit</button>
                    )}
                </div>
                <div className={styles.backButtonContainer}>
                    <button type="button" className={styles.backButton} onClick={onBack}>Back to Description</button>
                </div>
            </form>
        </div>
    );
};

export default MultiStageForm;
