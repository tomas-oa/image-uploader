import Image from "next/image"

export default function DragAndDropBox () {
  return (
    <div className="border border-[#a4c6f6] border-dashed min-w-[338px] min-h-[218px] rounded-md mt-8 bg-[#f6f8fb]">
    <figure className="flex flex-col items-center justify-center">
      <Image 
        src='/image.svg'
        alt='example image'
        width={114}
        height={88}
      />
    </figure>
    <p className="text-[#bdbdbd] text-sm">Drag & Drop your image here</p>
  </div>
  )
}
