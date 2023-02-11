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
      <div className="mb-2 flex items-center gap-2">
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
            className="rounded-[5px] bg-[#ececf1] p-2 text-xs font-semibold text-not-that-black"
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
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-not-that-black outline-none focus:border-black focus:ring-[#4649ff]"
      />
    </div>
  )
}

export default FormField
