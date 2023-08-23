/* eslint-disable @next/next/no-img-element */
"use client";

// import axios from "axios";
import { UploadApiResponse } from "cloudinary";
import { useRef, useState } from "react";

export const FileUploaderCloudinary = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<UploadApiResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    console.log(formData);

    // With Axios
    // const { data } = await axios.post("/api/upload", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });

    // With Fetch API
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
      // https://github.com/JakeChampion/fetch/issues/505#issuecomment-293064470
      // Setting the Content-Type header manually means it's missing the boundary parameter.
      // Remove that header and allow fetch to generate the full content type.
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
    });

    const data = await res.json();

    setResponse(data);
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="max-w-screen-md w-full flex flex-col items-center justify-center p-24 rounded-md border-2 border-lime-400 shadow-2xl shadow-lime-200/20 bg-zinc-950 gap-3"
    >
      <h1 className="text-3xl font-bold text-lime-400">Upload your file (Cloudinary)</h1>
      <input
        name="file"
        className="text-center border-2 rounded-md p-3 border-zinc-800"
        type="file"
        onChange={(e) => setFile(e.target.files![0])}
      />

      {file && (
        <img className="max-w-44 max-h-44" src={URL.createObjectURL(file)} alt={file.name} />
      )}

      <button className="bg-sky-500 px-6 py-3 ml-2 rounded-md">Submit</button>

      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </form>
  );
};

export const _FileUploaderSupabase = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    console.log(formData);

    const res = await fetch("/api/upload2", {
      method: "POST",
      body: formData,
      // https://github.com/JakeChampion/fetch/issues/505#issuecomment-293064470
      // Setting the Content-Type header manually means it's missing the boundary parameter.
      // Remove that header and allow fetch to generate the full content type.
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
    });

    const data = await res.json();

    setResponse(data);
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="max-w-screen-md w-full flex flex-col items-center justify-center p-24 rounded-md border-2 border-lime-400 shadow-2xl shadow-lime-200/20 bg-zinc-950 gap-3"
    >
      <h1 className="text-3xl font-bold text-lime-400">Upload your file (Supabase)</h1>
      <input
        name="file"
        className="text-center border-2 rounded-md p-3 border-zinc-800"
        type="file"
        onChange={(e) => setFile(e.target.files![0])}
      />

      {file && (
        <img className="max-w-44 max-h-44" src={URL.createObjectURL(file)} alt={file.name} />
      )}

      <button className="bg-sky-500 px-6 py-3 ml-2 rounded-md">Submit</button>

      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </form>
  );
};
