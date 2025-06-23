import styled from 'styled-components';
const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  flex-direction: row;
  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .nav-center {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin-left: 5rem;
    margin-top: 0.5rem;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo-text {
      display: block;
    }
  }
 `;
export default Wrapper;