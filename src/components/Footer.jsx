import linkedInLogo from '@/assets/images/LinkedIn_Logo.svg';
import githubLogo from '@/assets/images/Github_Logo.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Alura Challenger 2 - Develop by A. Barrera 2022</p>
            <div className="footer__links">
                <a
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/alejandro-bh91/"
                >
                    <img className="footer__icon" src={linkedInLogo} alt="LinkedIn" />
                </a>
                <a
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AlejandroBH/"
                >
                    <img className="footer__icon" src={githubLogo} alt="Github" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
