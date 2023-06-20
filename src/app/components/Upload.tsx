import DragAndDropBox from './DragAndDropBox'

export default function Upload () {
  return (
    <div className="min-w-[402px] min-h-[469px] flex flex-col items-center p-10 rounded-2xl shadow-lg">
      <h1 className="text-xl mb-5">Upload your image</h1>
      <small className="text-[#808080] text-xs font-medium"> File should be Jpeg, Png...</small>
      <DragAndDropBox />
      <small className="text-[#808080] my-6">Or</small>
      <button className="rounded-lg bg-[#09f] text-white py-2 px-3 text-sm">Choose a file</button>
    </div>
  )
}