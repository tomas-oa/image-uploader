export default async function uploadImage (file: any) {
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
