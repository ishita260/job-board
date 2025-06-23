import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import LogoutContainer from "../components/LogoutContainer";
import ThemeToggle from "../components/ThemeToggle";
import { useDashboardContext } from "../pages/dashboardContext";
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  console.log('context:', useDashboardContext());
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar} title="Hide/View Sidebar">
          <FaAlignLeft />
        </button>
        <div className="logo-container">
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
