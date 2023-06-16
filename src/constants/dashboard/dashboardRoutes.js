import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { UploadFile } from "@mui/icons-material";

export const routes = [
  {
    id: 1,
    routeName: "Dashboard",
    routePath: "/dashboard",
    iconComponent: <DashboardIcon />,
  },
  {
    id: 2,
    routeName: "Analytics",
    routePath: "analytics",
    iconComponent: <TimelineOutlinedIcon />,
  },
  {
    id: 3,
    routeName: "Reports",
    routePath: "reports",
    iconComponent: <BarChartOutlinedIcon />,
  },
  {
    id: 4,
    routeName: "Users Management",
    routePath: "users-management",
    iconComponent: <PeopleOutlinedIcon />,
  },

  {
    id: 5,
    routeName: "Upload File",
    routePath: "upload-file",
    iconComponent: <UploadFile />,
  },
];
