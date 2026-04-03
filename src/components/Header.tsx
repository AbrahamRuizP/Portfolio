// Header.tsx
import TypingText from "./TypingText";

const Header = () => (
  <header className="py-5 text-center bg-black bg-dots">
    <div className="container">
      <img
        src="/profile.jpg"
        alt="Abraham"
        className="rounded-circle img-fluid"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <h6 className="mt-3 text-light pb-4">
        Hello, I'm Abraham. A passionate Software Engineer.
      </h6>
      <h4 className="mb-3 fw-bold text-light pb-4">
        <TypingText text = "Java/SpringBoot and React developer" speed={70}/>
      </h4>
      <div className="d-flex justify-content-center gap-3 text-light">
        <a href="mailto:habramruizpestana@gmail.com" className="btn btn-primary btn-sm text-ligth">
          Contact Me
        </a>
        <a href="https://github.com/AbrahamRuizP" className="btn btn-dark btn-sm text-ligth">
          GitHub
        </a>
        <a href="#" className="btn btn-secondary btn-sm text-light">
          Download CV
        </a>
      </div>
    </div>
  </header>
);

export default Header;