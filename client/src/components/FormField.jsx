import React from "react"

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ececf1] p-2 rounded-[5px] text-not-that-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-300 text-not-that-black text-sm rounded-lg focus:ring-[#4649ff] focus:border-black outline-none block w-full p-3 border "
      />

      <div className="relative bg-gray-50 border border-gray-300 text-not-that-black text-sm rounded-lg focus:ring-blue-500 focus:border-black w-64 p-3 h-64 justify-center flex items-center"></div>
    </div>
  )
}

export default FormField
