import { useImageFile } from "./use-image-file";

export default function App() {
  const { ImageFileInput, ImagePreview } = useImageFile();

  return (
    <div className="App">
      <ImageFileInput />
      <ImagePreview />
    </div>
  );
}
