import './styles.css';
import {ReactComponent as YouTube} from './youtube.svg';
import {ReactComponent as Linkedin} from './linkedin.svg';
import {ReactComponent as Instagram} from './instagram.svg';
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
           <div className="footer-icons">
               <a href="https://devsuperior.com.br/sds2-aulas4583?blog=2dwf9sqq0&video=2" target="_new">
                    <YouTube />
               </a>
               <a href="https://br.linkedin.com/" target="_new">
                   <Linkedin />
               </a>
               <a href="https://pt.wikipedia.org/wiki/Instagram">
                <Instagram />
               </a>
           </div>
        </footer>
    );
}

export default Footer;