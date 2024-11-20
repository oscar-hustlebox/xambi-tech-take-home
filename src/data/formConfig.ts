import { EditEntry } from "../components/EditForm";

export const defaultEditEntries: EditEntry[] = [
  // Basic Information
  {
    attribute: "name",
    type: "Text",
    attributeName: "Name",
    isRequired: true,
  },
  {
    attribute: "description",
    type: "TextArea",
    attributeName: "Description",
    isRequired: false,
  },
  {
    attribute: "date",
    type: "Date",
    attributeName: "Date",
    isRequired: false,
  },
  {
    attribute: "price",
    type: "Text",
    attributeName: "Price",
    isRequired: true,
  },
  {
    attribute: "select",
    type: "Select",
    attributeName: "Select",
    isRequired: false,
  },
  {
    attribute: "option",
    type: "Radio",
    attributeName: "Options",
    isRequired: false,
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    attribute: "labels",
    type: "PillList",
    attributeName: "Pill List",
    isRequired: false,
  },

  // Media Uploads
  {
    attribute: "photo",
    type: "Photo",
    attributeName: "Photo",
    isRequired: false,
  },
  {
    attribute: "profilePhoto",
    type: "ProfilePhoto",
    attributeName: "Profile Photo",
    isRequired: false,
  },
  {
    attribute: "filePhoto",
    type: "FilePhoto",
    attributeName: "File Photo",
    isRequired: false,
  },
  {
    attribute: "file",
    type: "File",
    attributeName: "File Upload",
    isRequired: false,
  },

  // Complex Fields
  {
    attribute: "tags",
    type: "TextList",
    attributeName: "Tags",
    isRequired: false,
  },
  {
    attribute: "article",
    type: "Article",
    attributeName: "Article",
    isRequired: false,
  },
  {
    attribute: "showcase",
    type: "Showcase",
    attributeName: "Showcase",
    isRequired: false,
  },

  // Contact Information
  {
    attribute: "address",
    type: "Address",
    attributeName: "Address",
    isRequired: false,
  },

  // Terms and Conditions
  {
    attribute: "agree",
    type: "Checkbox",
    attributeName: "I agree",
    isRequired: false,
  },
];
