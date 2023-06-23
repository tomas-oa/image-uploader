import uploadImage from "../services/uploadImage"
import isImage from "./isImage"

export default async function upload (file: any, setUploaded: (uploaded: boolean) => void, setUrl: (url: string) => void) {
  if (isImage(file)) {
    const { response, name } = await uploadImage(file)
    setUploaded(response)
    setUrl(name)
  }
}
