"use client"
import { useState } from 'react'
import ShowImage from './ShowImage'
import SelectImage from './SelectImage'

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

  const putImage = await fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  const response = putImage.ok
  return { response , name }
}

export default function Upload () {
  const [file, setFile] = useState<any>(null)
  const [uploaded, setUploaded] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("https://")

  async function handleUpload (e: React.ChangeEvent<HTMLInputElement>) {
    const uploadedFile = e.target.files?.[0]
    validFile(uploadedFile) ? setFile(uploadedFile) : setFile(null)
    const { response, name } = await uploadImage(file)
    setUploaded(response)
    setUrl(name)
  }

  async function handleDrop (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()

    const uploadedFile = e.dataTransfer.files?.[0]
    validFile(uploadedFile) ? setFile(uploadedFile) : setFile(null)
    const { response, name } = await uploadImage(file)
    setUploaded(response)
    setUrl(name)
  }

  function handleDrag (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    uploaded 
      ? <ShowImage url={url} />
      :  <SelectImage 
            handleDrag={handleDrag} 
            handleDrop={handleDrop} 
            handleUpload={handleUpload}
        />
  )
}