import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';


function WhatsAppButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="bg-primary-500 hover:bg-primary-700 text-font p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-3"
            >
                <MessageCircle size={24} />
                <span className="hidden sm:inline font-semibold">WhatsApp</span>
            </a>
        </div>
    );
}

export default WhatsAppButton;
