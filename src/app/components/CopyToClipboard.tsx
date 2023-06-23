"use client"
import { useRef } from "react"

interface Props {
  url: string
}

export default function CopyToClipboard ({ url }: Props) {
  const BASE_URL = "https://image-uploader-devchallenges.s3.sa-east-1.amazonaws.com/"
  const urlRef = useRef<HTMLParagraphElement>(null)

  const copyUrlToClipboard = () => {
    const text = urlRef.current

    if (text != null) {
      navigator.clipboard.writeText(text.innerText)
        .then(() => {
          alert('Copied to clipboard')
        })
        .catch((err) => {
          alert('Failed to copy to clipboard')
        }
      )
    }
  }
    
  return (
    <div className="relative">
      <div className="block min-w-full p-4 text-sm text-[#4F4F4F] border border-[#E0E0E0] rounded-lg bg-[#F6F8FB]">
        <p ref={urlRef} className='truncate w-[215px]'>{`${BASE_URL}${url}`}</p>
      </div>
      <button className="text-white absolute right-2.5 bottom-2.5 bg-[#2F80ED] font-medium rounded-lg text-sm px-4 py-2" onClick={copyUrlToClipboard}>Copy Link</button>
    </div>
  )
}