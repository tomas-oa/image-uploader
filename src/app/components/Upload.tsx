"use client"
import { useState } from 'react'
import DragAndDropBox from './DragAndDropBox'

function isImage(file: File): boolean {
  const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
  const fileName = file.name;
  const fileExtension = fileName.split(".").pop()?.toLowerCase();
  return !!fileExtension && allowedExtensions.includes(fileExtension);
}


export default function Upload () {
  const [file, setFile] = useState<File | null>(null)

  function handleUpload (e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    if (!file) {
      alert('No file selected')
      setFile(null)
      return
    } else if (!isImage(file)) {
      alert('File is not an image')
      setFile(null)
      return
    } else {
      setFile(file)
    }
  }

  function handleDrag (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()
  }

  function handleDrop (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()

    const file = e.dataTransfer.files?.[0]
    
    if (!file) {
      alert('No file selected')
      setFile(null)
      return
    } else if (!isImage(file)) {
      alert('File is not an image')
      setFile(null)
      return
    } else {
      setFile(file)
    }
  }

  return (
    <form className="min-w-[402px] min-h-[469px] flex flex-col items-center p-10 rounded-2xl shadow-lg">
      <h1 className="text-xl mb-5">Upload your image</h1>
      <small className="text-[#808080] text-xs font-medium"> File should be Jpeg, Png...</small>
      <label htmlFor="file_upload" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
        <DragAndDropBox />
      </label>
      <small className="text-[#808080] my-6">Or</small>
      <label className="rounded-lg bg-[#09f] text-white py-2 px-3 text-sm">
        Choose file
        <input onChange={handleUpload} id="file_upload" type="file" className="hidden" accept='image/*'/>
      </label>
    </form>
  )
}