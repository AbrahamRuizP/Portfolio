// NavBar.tsx

const NavBar = () => (
    <section className="position-fixed top-0 start-50 translate-middle-x text-light">
        <div className="container shadow-sm rounded-pill bg-dark border border-1 border-opacity-25 d-flex align-items-center justify-content-center gap-4 py-1 px-5 mt-1">
            <span>Home</span>
            <span>Projects</span>
            <span>Contact</span>
        </div>
    </section>
);

export default NavBar;