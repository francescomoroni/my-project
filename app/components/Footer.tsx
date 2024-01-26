
const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src="vercel.svg" alt="Logo" />
            </div>
            <div className="links">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
            </div>
            <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
};

export default Footer;
