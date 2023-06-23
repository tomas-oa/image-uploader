import { useState } from 'react';
import DragAndDropBox from './DragAndDropBox'

interface Props {
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDrag: (e: React.DragEvent<HTMLLabelElement>) => void
  handleDrop: (e: React.DragEvent<HTMLLabelElement>) => void
}

export default function SelectImage ({ handleUpload, handleDrag, handleDrop }: Props) {
  return (
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
}
