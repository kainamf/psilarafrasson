import React from 'react';

const WHATSAPP_LINK = 'https://wa.me/554174037997';
import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="bg-primary hover:bg-accent text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-3"
            >
                <MessageCircle size={24} />
                <span className="hidden sm:inline font-semibold">Agendar Consulta</span>
            </a>
        </div>
    );
}

export default WhatsAppButton;
