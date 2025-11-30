import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUser,
} from "react-icons/hi2";

export default function MainNav() {
  return (
    <nav>
      <div className="w-full flex items-center justify-center">
        <img
          className="w-32 rounded-full"
          src="./../../public/Images/logo.avif"
          alt=""
        />
      </div>
      <ul className=" & > *:hover:bg-slate-300 & > *:p-3 pr-2  mt-5  flex flex-col & > *:flex & > *:gap-3 & > *:items-center  & > *:rounded-[3px]">
        <NavLink to="/dashboard">
          <HiOutlineHome className="w-6 h-6"/>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/booking">
          <HiOutlineCalendarDays className="w-6 h-6"  />
          <span>Booking</span>
        </NavLink>

        <NavLink to="/dashboard">
          <HiOutlineHomeModern className="w-6 h-6"  />
          <span>Cabins</span>
        </NavLink>

        <NavLink to="/dashboard">
          <HiOutlineUser className="w-6 h-6"  />
          <span>Users</span>
        </NavLink>
        <NavLink to="/dashboard">
          <HiOutlineCog6Tooth className="w-6 h-6" />
          <span>Settings</span>
        </NavLink>
         <NavLink to="/dashboard">
          <HiOutlineCog6Tooth className="w-6 h-6"  />
          <span>Account</span>
        </NavLink>
      </ul>
    </nav>
  );
}
