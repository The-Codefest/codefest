import GroupIcon from "@mui/icons-material/Group";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

export const CardData = [
  {
    id: 1,
    title: "Registered Users",
    icon: <GroupIcon />,
    value: 0,
  },
  {
    id: 2,
    title: "Unregistered Users",
    icon: <GroupRemoveIcon />,
    value: 0,
  },
  {
    id: 3,
    title: "Total Search Made",
    icon: <ImageSearchIcon />,
    value: 0,
  },
  {
    id: 4,
    title: "Search with no Results",
    icon: <PersonSearchIcon />,
    value: 0,
  },
];
