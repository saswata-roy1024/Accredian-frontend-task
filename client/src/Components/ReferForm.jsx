import React, { useState } from 'react';
import axios from 'axios';
function ReferForm({ onClose }) {
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const isValid = form.checkValidity();
    if (isValid) {
      const formData = {
        referrerName: form.referrerName.value,
        referrerEmail: form.referrerEmail.value,
        referrerPhone: form.referrerPhone.value,
        refereeName: form.refereeName.value,
        refereeEmail: form.refereeEmail.value,
        refereePhone: form.refereePhone.value,
      };

      try {
        const response = await axios.post('api/rf/refer', formData);
        if (response.ok) {
          setFormError(false);
          form.reset();
          onClose();
        } else {
          setFormError(true);
        }
      } catch (error) {
        console.error('Error:', error);
        setFormError(true);
      }
    } else {
      setFormError(true);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="hidden" id="formError">
            <p className="text-red-500">Please fill all mandatory fields.</p>
          </div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Refer a Friend</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Your Name *</label>
                <input type="text" id="referrerName" name="referrerName" className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="mt-4">
                <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">Your Email *</label>
                <input type="email" id="referrerEmail" name="referrerEmail" className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="mt-4">
                <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700">Your Phone</label>
                <input type="text" id="referrerPhone" name="referrerPhone" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mt-6">
                <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Friend's Name *</label>
                <input type="text" id="refereeName" name="refereeName" className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="mt-4">
                <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">Friend's Email *</label>
                <input type="email" id="refereeEmail" name="refereeEmail" className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="mt-4">
                <label htmlFor="refereePhone" className="block text-sm font-medium text-gray-700">Friend's Phone</label>
                <input type="text" id="refereePhone" name="refereePhone" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              </div>
              <div className="mt-6">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
                <button type="button" className="ml-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferForm;