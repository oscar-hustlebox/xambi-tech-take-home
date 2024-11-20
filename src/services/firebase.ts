import { StoredFile, StoredFileState } from "../data/common";

type ProgressCallback = (progress: number) => void;
type SuccessCallback = (file: StoredFile) => void;

export const uploadFile = (
  entityId: string,
  fieldName: string,
  fileToUpload: File,
  onProgress: ProgressCallback,
  onSuccess: SuccessCallback
): void => {
  // Mock implementation for now
  // In a real implementation, this would handle file upload to Firebase storage
  setTimeout(() => {
    // Simulate progress
    onProgress(50);

    // Simulate successful upload
    const mockStoredFile: StoredFile = {
      file_path: URL.createObjectURL(fileToUpload),
      file_name: fileToUpload.name,
      file_type: fileToUpload.type,
      file_size: fileToUpload.size,
      state: StoredFileState.Active,
      created_at: new Date(),
      updated_at: new Date(),
    };

    onSuccess(mockStoredFile);
  }, 1000);
};
