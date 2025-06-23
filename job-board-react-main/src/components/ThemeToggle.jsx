
 import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
 import Wrapper from '../assets/wrappers/ThemeToggle';
 import { useDashboardContext } from '../pages/dashboardContext';
 const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme} title='Change theme'>
      {isDarkTheme ? (
        <BsFillSunFill className='toggle-icon' />
      ) : (
        <BsFillMoonFill className='toggle-icon' />
      )}
    </Wrapper>
  );
 };
 export default ThemeToggle;