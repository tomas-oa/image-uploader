import Image from 'next/image'
import CheckIcon from './CheckIcon'
import CopyToClipboard from './CopyToClipboard'

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
        <figure className="max-h-[225px] max-w-[338px] flex items-center justify-center border border-gray-500 rounded-md mb-8">
          <Image
            className='max-h-[225px] max-w-[338px] object-fit rounded-md'
            src={`${BASE_URL}${url}`}
            alt='Uploaded image'
            width={338}
            height={225}
          />
        </figure>
        <CopyToClipboard url={url} />
      </div>
    </main>
  )
}
