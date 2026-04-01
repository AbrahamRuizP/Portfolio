// Header.tsx
const Header = () => (
  <header className="py-5 text-center bg-light">
    <div className="container">
      <img
        src="/profile.jpg"
        alt="Abraham"
        className="rounded-circle img-fluid"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <h1 className="mt-3 fw-bold">Abraham Orestes Ruiz Pestana</h1>
      <p className="text-muted mb-3">Software Developer | React + Java</p>
      <div className="d-flex justify-content-center gap-3">
        <a href="mailto:habramruizpestana@gmail.com" className="btn btn-outline-primary btn-sm">
          Email
        </a>
        <a href="https://github.com/AbrahamRuizP" className="btn btn-outline-dark btn-sm">
          GitHub
        </a>
        <a href="#" className="btn btn-outline-secondary btn-sm">
          Portfolio
        </a>
      </div>
    </div>
  </header>
);

export default Header;