"use client"
import { useState } from 'react'
import DragAndDropBox from './DragAndDropBox'

function isImage(file: File): boolean {
  const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
  const fileName = file.name;
  const fileExtension = fileName.split(".").pop()?.toLowerCase();
  return !!fileExtension && allowedExtensions.includes(fileExtension);
}

function validFile (file: any): boolean | undefined {
  if (!file || !isImage(file)) {
    alert('Invalid file type')
    return false
  }
  return true
}

async function uploadImage (file: any) {
  const { name } = file
  const res = await fetch(`/api/upload?file=${name}`)
  const { url } = await res.json()

  await fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export default function Upload () {
  const [file, setFile] = useState<any>(null)

  async function handleUpload (e: React.ChangeEvent<HTMLInputElement>) {
    const uploadedFile = e.target.files?.[0]
    validFile(uploadedFile) ? setFile(uploadedFile) : setFile(null)
    await uploadImage(file)
  }

  async function handleDrop (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()

    const uploadedFile = e.dataTransfer.files?.[0]
    validFile(uploadedFile) ? setFile(uploadedFile) : setFile(null)
    await uploadImage(file)
  }

  function handleDrag (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <form className="min-w-[402px] min-h-[469px] flex flex-col items-center p-10 rounded-2xl shadow-lg">
      <h1 className="text-xl mb-5">Upload your image</h1>
      <small className="text-[#808080] text-xs font-medium"> File should be Jpeg, Png...</small>
      <label htmlFor="file_upload" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
        <DragAndDropBox />
      </label>
      <small className="text-[#808080] my-6">Or</small>
      <label className="rounded-lg bg-[#09f] text-white py-2 px-3 text-sm cursor-pointer">
        Choose file
        <input onChange={handleUpload} id="file_upload" type="file" className="hidden" accept='image/*'/>
      </label>
    </form>
  )
}