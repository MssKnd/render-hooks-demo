import { useImageFileInput } from "./use-image-file-input";

export default function App() {
  const { ImageFileInput, ImagePreview } = useImageFileInput();

  return (
    <div className="App">
      <ImageFileInput />
      <ImagePreview />
    </div>
  );
}
