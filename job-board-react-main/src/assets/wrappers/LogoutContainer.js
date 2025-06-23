import styled from 'styled-components';
const Wrapper = styled.div`
  position: relative;

  .logout-btn {
    background-color: #1e8aa4;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
  }

  .logout-btn:hover {
    background-color:rgba(83, 144, 159, 0.19);
  }

  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }

  .show-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export default Wrapper;