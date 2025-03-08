import {
  FaFileUpload,
  FaImage,
  FaFolder,
  FaLink,
  FaPhotoVideo,
  FaSearch,
  FaGoogleDrive,
  FaDropbox,
  FaMicrosoft,
  FaVideo,
  FaBolt,
  FaChartBar,
  FaUser,
  FaCog,
  FaEnvelope,
} from "react-icons/fa";

export const menu1 = [
  {
    label: "Add image",
    icon: <FaImage />,

    onClick: () => alert("Clicked: Add image (top-level)"),
    submenu: [
      {
        label: "Upload from computer",
        icon: <FaFileUpload />,
        onClick: () => alert("Clicked: Upload from computer"),
      },
      {
        label: "Upload from URL",
        icon: <FaLink />,
        onClick: () => alert("Clicked: Upload from URL"),
      },
      { divider: true },
      {
        label: "Choose from Library",
        icon: <FaPhotoVideo />,
        onClick: () => alert("Clicked: Choose from Library"),
      },
      {
        label: "Discover images",
        icon: <FaSearch />,
        onClick: () => alert("Clicked: Discover images"),
      },
      { divider: true },
      {
        label: "Google Drive",
        icon: <FaGoogleDrive />,

        onClick: () => alert("Clicked: Google Drive"),
      },
      {
        label: "Dropbox",
        icon: <FaDropbox />,

        onClick: () => alert("Clicked: Dynamic image"),
      },
      {
        label: "OneDrive",
        icon: <FaMicrosoft />,

        onClick: () => alert("Clicked: OneDrive"),
      },
      {
        label: "Canva",
        icon: <FaVideo />,
        onClick: () => alert("Clicked: Canva"),
      },
      { divider: true },
      {
        label: "Dynamic image",
        icon: <FaBolt />,
        onClick: () => alert("Clicked: Dynamic image"),
      },
    ],
  },
  {
    label: "Add video",
    icon: <FaVideo />,
    onClick: () => alert("Clicked: Add video (top-level)"),
    submenu: [
      {
        label: "Upload from computer",
        icon: <FaFileUpload />,
        onClick: () => alert("Clicked: Upload from computer (video)"),
      },
      {
        label: "Upload from URL",
        icon: <FaLink />,
        onClick: () => alert("Clicked: Upload from URL (video)"),
      },
      { divider: true },
      {
        label: "Choose from Library",
        icon: <FaPhotoVideo />,
        onClick: () => alert("Choose from Library"),
      },
      {
        label: "Discover videos",
        icon: <FaSearch />,
        onClick: () => alert("Clicked: Discover videos"),
      },
      { divider: true },
      {
        label: "Google Drive",
        icon: <FaGoogleDrive />,
        onClick: () => alert("Clicked: Google Drive"),
      },
      {
        label: "Dropbox",
        icon: <FaDropbox />,
        onClick: () => alert("Clicked: Dropbox"),
      },
      {
        label: "OneDrive",
        icon: <FaMicrosoft />,
        onClick: () => alert("Clicked: OneDrive"),
      },
      { divider: true },
      {
        label: "Dynamic video",
        icon: <FaBolt />,
        onClick: () => alert("Dynamic video"),
      },
    ],
  },
];

export const menu2 = [
  {
    label: "New post",
    onClick: () => alert("Clicked: New post"),
  },
  {
    label: "New note",
    onClick: () => alert("Clicked: New note"),
  },
  {
    label: "Ideas",
    onClick: () => alert("Clicked: Ideas"),
  },
  { divider: true },
  { label: "Bulk publishing", onClick: () => alert("Bulk publishing") },
  { label: "Find content", onClick: () => alert("Clicked: Find content") },
  {
    label: "Smart publishing",
    onClick: () => alert("Clicked: Smart publishing"),
  },
  { divider: true },
  {
    label: "Instagram planner",
    onClick: () => alert("Clicked: Instagram planner"),
  },
  { label: "TikTok planner", onClick: () => alert("Clicked: TikTok planne") },
  { label: "Thread maker", onClick: () => alert("Clicked: Thread maker") },
];

export const menu3 = [
  {
    label: "Dashboard",
    icon: <FaChartBar />,
    onClick: () => alert("Clicked: Dashboard"),
    submenu: [
      {
        label: "Reports",
        icon: <FaFolder />,
        onClick: () => alert("Clicked: Reports"),
      },
      {
        label: "Analytics",
        icon: <FaEnvelope />,
        onClick: () => alert("Clicked: Analytics"),
        submenu: [
          {
            label: "Traffic",
            icon: <FaChartBar />,
            onClick: () => alert("Clicked: Traffic"),
          },
          {
            label: "Conversions",
            icon: <FaUser />,
            onClick: () => alert("Clicked: Conversions"),
          },
        ],
      },
    ],
  },
  {
    label: "Profile",
    icon: <FaUser />,
    onClick: () => alert("Clicked: Profile"),
    submenu: [
      {
        label: "Settings",
        icon: <FaCog />,
        onClick: () => alert("Clicked: Settings"),
      },
      {
        label: "Logout",
        icon: <FaEnvelope />,
        onClick: () => alert("Clicked: Logout"),
      },
    ],
  },
  {
    label: "Admin",
    icon: <FaCog />,
    onClick: () => alert("Clicked: Admin"),
  },
];
