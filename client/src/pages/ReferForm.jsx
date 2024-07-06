import React, { useState, useRef, useEffect } from 'react';

function ReferForm({ onClose }) {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value.trim() });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.body.classList.remove('overflow-hidden');
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm select-none'>
            <div className='flex items-center justify-center h-screen'>
                <div ref={formRef} className='bg-slate-100 w-fit py-8 px-10 rounded-lg flex flex-col gap-6'>
                    <h1 className='text-3xl font-bold text-center mb-6'>Refer & Earn</h1>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Friend's Name"
                        required
                        type="text"
                        className="h-12 px-4 w-72 sm:w-80 rounded-lg shadow-sm text-base border"
                    />
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Friend's Email"
                        required
                        type="email"
                        className="h-12 px-4 w-72 sm:w-80 rounded-lg shadow-sm text-base border"
                    />
                    <input
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="Enter Friend's Number"
                        required
                        type="text"
                        className="h-12 px-4 w-72 sm:w-80 rounded-lg shadow-sm text-base border"
                    />
                    <div className='flex gap-4'>
                        <button
                            className="w-full h-12 text-lg font-extrabold rounded-lg bg-[var(--base-color)] hover:bg-[var(--hover-color)] text-indigo-50 shadow-xl"
                            onClick={handleSubmit}
                        >
                            Refer Now
                        </button>
                        <button
                            className="w-full h-12 text-lg font-bold border rounded-lg text-[var(--base-color)] hover:text-[var(--hover-color)] shadow-xl"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferForm;
