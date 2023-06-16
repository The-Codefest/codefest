import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LinkIcon from "@mui/icons-material/Link";

import ScrappedUrl from "pages/dashboard/ScrappedUrl";
import Report from "pages/dashboard/Report";
import Users from "pages/dashboard/Users";
import Stats from "pages/dashboard/Stats";
import Dashboard from "pages/dashboard/Dashboard";

export const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcon />,
    component: <Dashboard />,
  },
  {
    id: 2,
    title: "User List",
    icon: <PeopleOutlinedIcon />,
    component: <Users />,
  },
  {
    id: 3,
    title: "Statistics",
    icon: <TimelineOutlinedIcon />,
    component: <Stats />,
  },
  {
    id: 4,
    title: "Reports",
    icon: <BarChartOutlinedIcon />,
    component: <Report />,
  },
  {
    id: 4,
    title: "Upload URLS",
    icon: <LinkIcon />,
    component: <ScrappedUrl />,
  },
  {
    id: 5,
    title: "Logout",
    icon: <LogoutOutlinedIcon />,
  },
];
