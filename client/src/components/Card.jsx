import React from "react"

import { download } from "../assets"
import { downloadImage } from "../utils"

const Card = ({ _id, name, prompt, photo }) => {
  console.log("pohot url", photo)
  return (
    <div className="card group relative rounded-xl shadow-card hover:shadow-cardhover">
      <img
        src={photo}
        alt={prompt}
        className="h-auto w-full rounded-xl object-cover"
      />
    </div>
  )
}

export default Card
