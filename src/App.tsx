import { useImageFileInput } from "./use-image-file-input";

export default function App() {
  const { imageDataUrl, ImageFileInput } = useImageFileInput();

  return (
    <div className="App">
      <ImageFileInput />
      {imageDataUrl && <img src={imageDataUrl} alt={"preview"} />}
    </div>
  );
}
