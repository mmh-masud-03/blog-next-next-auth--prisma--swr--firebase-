"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
const storage = getStorage(app);

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (file) {
      const name = `${new Date().getTime()}-${file.name}`;

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setMedia(downloadURL);
          });
        }
      );
    }
  }, [file]);
  const slugify = (str: string): string => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const submitHandler = async (): Promise<void> => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        catSlug: slugify(title),
      }),
    });
  };
  return (
    <div className="flex flex-col w-3/4 mx-auto my-8 bg-blue-200 px-6 py-4">
      <input
        type="text"
        placeholder="Title"
        className="outline-none p-2 text-2xl"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex flex-row">
        <span className=" ">
          <button onClick={() => setOpen(!open)}>
            <Image src="/images/sun.png" alt="" width={16} height={16} />
          </button>
        </span>
        {open && (
          <div className="flex flex-row">
            <input
              type="file"
              id="image"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFile(e.target.files?.[0] || null)
              }
              style={{ display: "none" }}
            />
            <label htmlFor="image">
              <button>
                <Image src="/images/sun.png" alt="" width={16} height={16} />
              </button>
            </label>
            <button>
              <Image src="/images/sun.png" alt="" width={16} height={16} />
            </button>
            <button>
              <Image src="/images/sun.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story........."
        className="bg-slate-200 h-[45vh] rounded "
      />
    </div>
  );
};

export default page;
