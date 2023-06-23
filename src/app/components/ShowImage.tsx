import Image from 'next/image'
import CheckIcon from './CheckIcon'

interface Props {
  url: string
}

export default function ShowImage ({ url }: Props) {
  const BASE_URL = "https://image-uploader-devchallenges.s3.sa-east-1.amazonaws.com/"

  return (
    <main className="min-w-[418px] min-h-[502px] items-center p-10 rounded-2xl shadow-lg border border-gray-100">
      <div className='min-w-[338px]'>
        <header className='h-[77px] flex flex-col items-center text-center'>
          <CheckIcon />
          <h1 className="text-xl mb-5">Uploaded Successfully!</h1>
        </header>
        <figure className="min-h-[225px] flex items-center justify-center border border-gray-500 rounded-md mb-8 ">
          <Image
            className='object-scale-down'
            src={`${BASE_URL}${url}`}
            alt='Uploaded image'
            width={338}
            height={224}
          />
        </figure>
        <div>   
          <div className="relative">
            <div className="block min-w-full p-2 py-4 text-sm text-[#4F4F4F] border border-[#E0E0E0] rounded-xl bg-[#F6F8FB]">
              <p className='truncate w-[215px]'>{`${BASE_URL}${url}`}</p>
            </div>
            <button className="text-white absolute right-1 bottom-1 bg-[#2F80ED] font-medium rounded-xl text-sm px-5 py-3.5">Copy Link</button>
          </div>
        </div>
      </div>
    </main>
  )
}
