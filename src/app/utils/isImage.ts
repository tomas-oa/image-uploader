export default function isImage(file: any): boolean {
  const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
  const fileName = file.name;
  const fileExtension = fileName.split(".").pop()?.toLowerCase();
  return !!fileExtension && allowedExtensions.includes(fileExtension);
}
