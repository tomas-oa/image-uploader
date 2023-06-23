"use client"
import { useState } from 'react'
import ShowImage from './ShowImage'
import SelectImage from './SelectImage'
import upload from '../utils/upload'

export default function Upload () {
  const [uploaded, setUploaded] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("")

  async function handleUpload (e: React.ChangeEvent<HTMLInputElement>) {
    const userFile = e.target.files?.[0]
    await upload(userFile, setUploaded, setUrl)
  }

  async function handleDrop (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()
    const userFile = e.dataTransfer.files?.[0]
    await upload(userFile, setUploaded, setUrl)
  }

  function handleDrag (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    uploaded 
      ? <ShowImage url={url} />
      :  
        <SelectImage 
          handleDrag={handleDrag} 
          handleDrop={handleDrop} 
          handleUpload={handleUpload}
        />
  )
}