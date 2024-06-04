import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"

const MainLayout = () => {
  return (
    <div>
      {/* navbar  */}
      <Navbar></Navbar>
      <div>
            <Outlet></Outlet>
      </div>
    </div>
  )
}

export default MainLayout