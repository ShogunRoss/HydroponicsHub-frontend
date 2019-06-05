// @material-ui/icons
import Dashboard from "@material-ui/icons/admin";
import Person from "@material-ui/icons/Person";
import DeviceHub from "@material-ui/icons/DeviceHub";
// core components/views for Admin layout
import DashboardPage from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import DevicePage from "./pages/Device";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/device",
    name: "User Profile",
    icon: DeviceHub,
    component: DevicePage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
