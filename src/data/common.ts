export enum StoredFileState {
  Active = "Active",
  Deleted = "Deleted",
  Pending = "Pending",
}

export type StoredFile = {
  id?: string;
  file_path: string;
  file_name?: string;
  file_type?: string;
  file_size?: number;
  state: StoredFileState;
  created_at?: Date;
  updated_at?: Date;
};
