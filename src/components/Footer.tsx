import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

function Footer() {
    return (
        <footer className="w-full min-h-[80px] flex flex-col justify-between bg-primary-700">
            <div className="w-full bg-primary-600 flex gap-6 justify-center items-center py-2" role="list">
                <span className="text-lg font-semibold mr-2">Redes Sociais:</span>
                <span className="elementor-grid-item" role="listitem">
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                        <span className="sr-only">Whatsapp</span>
                        <span className="rounded-full flex items-center justify-center" style={{ width: 44, height: 44, background: '#98C5CA' }}>
                            <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" width={28} height={28} style={{ filter: 'brightness(0) saturate(100%)', color: '#000' }} />
                        </span>
                    </a>
                </span>
                <span className="elementor-grid-item" role="listitem">
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram" href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <span className="sr-only">Instagram</span>
                        <span className="bg-primary-100 rounded-full flex items-center justify-center" style={{ width: 44, height: 44 }}>
                            <img src="/assets/icons/instagram.svg" alt="Instagram" width={28} height={28} style={{ filter: 'brightness(0) saturate(100%)', color: '#000' }} />
                        </span>
                    </a>
                </span>
            </div>
            <div className="w-full text-center text-font bg-tertiary-300 py-1 rounded-none flex items-center justify-center">
                <p className="text-lg text-font">&copy; 2025 Lara Frasson - Todos os direitos reservados | Desenvolvido por <a href="https://github.com/kainamf" target="_blank" rel="noopener noreferrer" className="underline hover:text-font">Kainã Freitas</a></p>
            </div>
        </footer>
    );
}

export default Footer;
