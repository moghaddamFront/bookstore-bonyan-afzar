// src/components/form/form-input/form-input.tsx
'use client';
import React from 'react';
import { FormInputProps } from './form-input'; // فرض می‌کنیم تایپ‌ها جدا هستند

function FormInput({ label, type = 'text', register, error }: FormInputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold text-sm text-gray-700">
        {label}
      </label>
      <input
        type={type}
        {...register}
        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default FormInput;
