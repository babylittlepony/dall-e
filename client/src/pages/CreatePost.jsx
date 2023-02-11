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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.prompt && form.photo) {
      setLoading(true)

      try {
        const res = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        })

        await res.json()
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false)
      }
    }
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({ ...form, prompt: randomPrompt })
  }
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true)
        const res = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        })

        const data = await res.json()

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
      } catch (error) {
        alert(error)
      } finally {
        setGeneratingImg(false)
      }
    } else {
      alert("Please enter an image")
    }
  }

  return (
    <section className="mx-auto max-w-7xl">
      <div className="text-[32px] font-bold text-not-that-black">
        <h1>Create</h1>
        <p className="mt-2 max-w-[500px] text-[14px] tracking-wide text-sky-blue">
          Create imaginative and visually stunning images through
          <span className="font-extrabold text-not-that-black"> DALL-E AI</span>
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Egar"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Image"
            type="text"
            name="prompt"
            placeholder="an oil painting by Matisse of a humanoid robot playing chess"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>

        <div className="relative mt-6 flex h-64 w-64 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-not-that-black focus:border-black focus:ring-blue-500">
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

          {generatingImg && (
            <div className="absolute inset-0 z-0 flex items-center justify-center rounded-lg bg-gray-50">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="w-full  bg-black px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-not-that-black hover:font-extrabold"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[14px] text-smoke-gray">
            Share your image with others
          </p>
          <button
            type="submit"
            className="mt-3 w-full border-4 border-black bg-gray-300 px-5 py-2.5 text-center text-sm font-bold text-not-that-black hover:bg-gray-100"
          >
            {loading ? "Sharing..." : "Share now"}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
