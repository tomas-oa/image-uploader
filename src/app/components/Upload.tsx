"use client"
import { useState } from 'react'
import Image from "next/image"
import DragAndDropBox from './DragAndDropBox'
import CheckIcon from './CheckIcon'

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

  return putImage.ok
}

export default function Upload () {
  const [file, setFile] = useState<any>(null)
  const [uploaded, setUploaded] = useState<boolean>(false)

  async function handleUpload (e: React.ChangeEvent<HTMLInputElement>) {
    const uploadedFile = e.target.files?.[0]
    validFile(uploadedFile) ? setFile(uploadedFile) : setFile(null)
    const response = await uploadImage(file)
    setUploaded(response)
  }

  async function handleDrop (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()

    const uploadedFile = e.dataTransfer.files?.[0]
    validFile(uploadedFile) ? setFile(uploadedFile) : setFile(null)
    const response = await uploadImage(file)
    setUploaded(response)
  }

  function handleDrag (e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    uploaded ? (
      <main className="min-w-[402px] min-h-[469px] items-center p-10 rounded-2xl shadow-lg">
        <div className='min-w-[338px]'>
          <div>
            <CheckIcon />
            <h1 className="text-xl mb-5">Uploaded Successfully!</h1>
          </div>
          <figure className="min-h-[225px] flex items-center justify-center border border-gray-500 rounded-md mb-8">
            <Image
              src='/check.svg'
              alt='example image'
              width={114}
              height={88}
            />
          </figure>
          <input className='w-full border border-[#e0e0e0] bg-[#F6F8FB] rounded-md p-2 text-xs' value={'https://'} type="text" disabled />
        </div>
      </main>
    ) : (
      <main className="min-w-[402px] min-h-[469px] items-center p-10 rounded-2xl shadow-lg">
        <h1 className="text-xl mb-5">Upload your image</h1>
        <small className="text-[#808080] text-xs font-medium"> File should be Jpeg, Png...</small>
        <form className='flex flex-col items-center'>
          <label htmlFor="file_upload" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
            <DragAndDropBox />
          </label>
          <small className="text-[#808080] my-6">Or</small>
          <label className="w-[110px] rounded-lg bg-[#09f] text-white py-2 px-3 text-sm cursor-pointer">
            Choose file
            <input onChange={handleUpload} id="file_upload" type="file" className="hidden" accept='image/*'/>
          </label>
        </form>
      </main>
  )
  )
}