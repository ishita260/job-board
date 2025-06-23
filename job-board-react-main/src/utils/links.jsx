import React from "react";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdDelete } from 'react-icons/md';
const links = [
  { text: "add job", path: ".", icon: <FaWpforms /> },
  { text: "all jobs", path: "all-jobs", icon: <MdQueryStats /> },
  { text: "stats", path: "stats", icon: <IoBarChartSharp /> },
  { text: "profile", path: "profile", icon: <ImProfile /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
//   {
//   text: 'Delete Job',
//   path: '/dashboard/delete-job',
//   icon: <i className="fa-solid fa-trash" ></i>, // or use your icon system
  
// }
{
  text: 'Delete Job',
  path: 'delete-job',
  icon: <MdDelete />, // ✅ Use this instead of <i className=...>
}

];
export default links;
