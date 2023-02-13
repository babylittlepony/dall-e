import React from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import { Home, CreatePost } from "./pages"
import { logo } from "./assets"

const App = () => {
  return (
    <BrowserRouter>
      <header className="flex w-full items-center justify-between border-b border-b-[#e6ebf4] bg-white px-4 py-4 sm:px-8">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div>
          <Link
            to="/create-post"
            className="rounded-md bg-black px-4 py-2 font-inter font-bold text-white"
          >
            Create
          </Link>
          <Link
            to="https://openai.com/dall-e-2/"
            className="ml-2 rounded-md bg-black px-4 py-2 font-inter font-bold text-white xs:ml-8"
          >
            About
          </Link>
        </div>
      </header>
      <main className="min-h-[calc(100vh-73px)] w-full bg-[#f9fafe] px-4 py-8 sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
