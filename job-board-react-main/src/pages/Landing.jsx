import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import styled from "styled-components";
const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Track <span> My </span> Talent
          </h1>
          <p>
          Seamlessly track your job applications, interviews, and offers — all in one place. Take charge of your tech career with Jobify . Stay focused, stay organized, and never let an opportunity slip away!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.section`
  nav {
    height: var(--nav-height);
    width: var(--fluid-width);
    margin-top: 1.5rem;
    margin-left: 6rem;
  }
  .page {
    min-height: calc(90vh - var(--nav-height));
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 400px;
    column-gap: 3rem;
    padding: 0 60px;
    margin-left: 4rem;  
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .btn {
    padding: 12px 24px;
    margin: 5px;
    font-size: 1rem;
    text-decoration: none;
    color: white;
  }
  @media (max-width: 991px) {
    .page {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }
    .main-img {
      display: none;
    }
  }
`;
export default Landing;
