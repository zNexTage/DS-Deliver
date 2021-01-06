import "./style.css"
import { ReactComponent as YouTubeIcon } from '../../Images/youtube.svg'
import { ReactComponent as LinkedinIcon } from '../../Images/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../../Images/instagram.svg'

function Footer(): JSX.Element {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a
                    target="_new"
                    href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g">
                    <YouTubeIcon />
                </a>

                <a
                    target="_new"
                    href="https://www.linkedin.com/school/devsuperior/">
                    <LinkedinIcon />
                </a>

                <a
                    target="_new"
                    href="https://www.instagram.com/devsuperior.ig/">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;