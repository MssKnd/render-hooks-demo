import { useState } from "react";

export function useImageFile() {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  const handleInput = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const file = changeEvent.target.files ? changeEvent.target.files[0] : null;
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (typeof event?.target?.result === "string") {
        setImageDataUrl(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const ImageFileInput = () => (
    <input type="file" accept="image/*" onChange={handleInput} />
  );

  const ImagePreview = () =>
    imageDataUrl ? <img src={imageDataUrl} alt="preview" /> : <></>;

  return {
    imageDataUrl,
    ImageFileInput,
    ImagePreview
  };
}
