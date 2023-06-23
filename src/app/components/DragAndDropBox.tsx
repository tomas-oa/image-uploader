import Image from "next/image"

export default function DragAndDropBox () {
  return (
    <div className="border border-[#97BEF4] border-dashed min-w-[338px] min-h-[218px] rounded-md mt-8 bg-[#F6F8FB] flex flex-col items-center justify-center cursor-pointer">
      <figure className="flex flex-col items-center justify-center">
        <Image 
          src='/image.svg'
          alt='example image'
          width={114}
          height={88}
        />
      </figure>
      <p className="text-[#bdbdbd] text-sm mt-4">Drag & Drop your image here</p>
    </div>
  )
}
