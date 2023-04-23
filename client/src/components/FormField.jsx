import React from 'react'

const FormField = ({ labelName, type, name, placeholder, 
  value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
          {
            isSurpriseMe && (
              <button
                type="button"
                onClick={handleSurpriseMe}
                className='font-semibold text-sx bg-[#ECECF1] py-1
                px-2 rounded-[5px] text-black'
              >
                Surprise me
              </button>
            )
          }
          <input
            type={type}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className='bg-gray-50 border border-gray-300 text-gray-900
            text-sm rounded-lg focus:ring-[#46499ff] focus:border-[#4649ff]
            outline-none block w-full p-3'
          />
      </div>
    </div>
  )
}

export default FormField