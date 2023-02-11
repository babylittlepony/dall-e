import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { preview } from "../assets"
import { getRandomPrompt } from "../utils"
import { FormField, Loader } from "../components"

const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  })
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {}

  const handleChange = (e) => {}
  const handleSurpriseMe = () => {}

  return (
    <section className="mx-auto max-w-7xl">
      <div className="text-[32px] font-bold text-not-that-black">
        <h1>Create</h1>
        <p className="mt-2 max-w-[500px] text-[14px] text-sky-blue">
          Create imaginative and visually stunning images through{" "}
          <span className="font-extrabold text-not-that-black">DALL-E AI</span>
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Fulan"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="an oil painting by Matisse of a humanoid robot playing chess"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>

        <div className="relative flex h-64 w-64 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-not-that-black focus:border-black focus:ring-blue-500">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="h-full w-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              className="h-9/12 w-9/12 object-contain opacity-40"
            />
          )}
        </div>
      </form>
    </section>
  )
}

export default CreatePost
