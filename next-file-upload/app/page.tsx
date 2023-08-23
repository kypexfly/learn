import { FileUploaderCloudinary, _FileUploaderSupabase } from "../components/file-uploader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-16 gap-6">
      {/* <FileUploaderSupabase /> */}
      <FileUploaderCloudinary />
    </main>
  );
}
