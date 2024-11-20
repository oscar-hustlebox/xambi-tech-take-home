import React, { useState, useEffect } from "react";
import { StoredFile, StoredFileState } from "../data/common";
import { uploadFile } from "../services/firebase";
import toast from "react-hot-toast";

type FileUploadProps = {
  fieldDisplayName: string;
  fieldDisplaySubName?: string;
  fieldName: string;
  initialFiles: StoredFile[];
  entityId: string | null;
  supportedFileTypes: string;
  uponFileChange: (files: StoredFile[]) => void;
  isMultiple: boolean;
};

export const FileUpload: React.FC<FileUploadProps> = ({
  fieldDisplayName,
  fieldDisplaySubName,
  fieldName,
  initialFiles,
  entityId,
  supportedFileTypes,
  uponFileChange,
  isMultiple,
}) => {
  const [files, setFiles] = useState<StoredFile[]>(initialFiles || []);

  useEffect(() => {
    setFiles(initialFiles || []);
  }, [initialFiles]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) return;

    const fileToUpload = event.target.files[0];
    if (fileToUpload.size > 10090000) {
      toast.error("Please upload file under 10MB.");
      return;
    }

    uploadFile(
      entityId || "",
      fieldName,
      fileToUpload,
      (progress) => {
        // Handle progress if needed
        console.log("Upload progress:", progress);
      },
      (file: StoredFile) => {
        if (isMultiple) {
          setFiles((prevFiles) => [...prevFiles, file]);
          uponFileChange([...files, file]);
        } else {
          setFiles([file]);
          uponFileChange([file]);
        }
      }
    );
  };

  const handleDelete = (index: number) => {
    const updatedFiles = files.map((file, i) => {
      if (i === index) {
        return { ...file, state: StoredFileState.Deleted };
      }
      return file;
    });
    setFiles(updatedFiles);
    uponFileChange(updatedFiles);
  };

  return (
    <div className="col-span-6">
      <label className="block text-sm font-medium text-gray-700">
        {fieldDisplayName}
        {fieldDisplaySubName && (
          <span className="block text-xs text-gray-500">
            {fieldDisplaySubName}
          </span>
        )}
      </label>
      <div className="mt-2 flex flex-wrap gap-4">
        {files
          .filter((file) => file.state !== StoredFileState.Deleted)
          .map((file, index) => (
            <div
              key={index}
              className="relative h-24 w-24 overflow-hidden rounded-lg border border-gray-300"
            >
              <img
                src={file.file_path}
                alt=""
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="absolute top-0 right-0 m-1 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        {(!files.length ||
          (isMultiple &&
            files.filter((f) => f.state !== StoredFileState.Deleted).length <
              6)) && (
          <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
            <label className="flex cursor-pointer flex-col items-center">
              <svg
                className="h-8 w-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <input
                type="file"
                className="hidden"
                accept={supportedFileTypes}
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {supportedFileTypes.replace(/\./g, "").toUpperCase()} up to 10MB
      </p>
    </div>
  );
};
