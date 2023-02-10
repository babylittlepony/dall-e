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
    <section className="max-w-7xl mx-auto">
      <div className="font-bold text-not-that-black text-[32px]">
        <h1>Create</h1>
        <p className="mt-2 text-sky-blue text-[14px] max-w-[500px]">
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
      </form>
    </section>
  )
}

export default CreatePost
