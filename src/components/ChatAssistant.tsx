import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, Bot, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const COMPANY_INFO = `
Nome: Aliança Assistência Técnica
CNPJ: 37.404.700/0001-51
Localização: Rio de Janeiro (RJ)
Especialidade: Assistência técnica, manutenção e instalação de aparelhos domésticos e corporativos.
Diferenciais: Emissão de nota fiscal, garantia formal, técnicos certificados, unidades móveis no RJ.
Redes Sociais:
- Facebook: https://www.facebook.com/profile.php?id=61561919086367
- Instagram: @alianca_assistencia (ou link direto se disponível)
- WhatsApp: https://wa.me/5521992136779

Objetivo da IA: Ser um assistente inteligente. Ajude os clientes com dúvidas básicas sobre serviços.
SEMPRE mencione ou encoraje o usuário a entrar em contato via WhatsApp para orçamentos ou suporte direto.
Responda de forma profissional, robusta e clara.
Se o usuário quiser ver mais fotos, mencione a galeria no site ou o Instagram.
`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatAssistant({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou o assistente virtual da Aliança. Em que posso te ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `Você é o assistente virtual oficial da Aliança Assistência Técnica. Informações da empresa: ${COMPANY_INFO}. Sua missão é guiar o cliente aos canais oficiais (WhatsApp e Redes Sociais) e tirar dúvidas sobre serviços técnicos no RJ.`,
        },
      });

      // Simple chat history mapped properly
      const response = await chat.sendMessage({ 
        message: userMsg 
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || 'Desculpe, tive um problema ao processar sua resposta. Pode tentar falar pelo WhatsApp?' }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Ops! Estou com uma instabilidade técnica. Por favor, clique no botão do WhatsApp ao lado para falar com um técnico agora mesmo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-28 right-8 z-[100] w-[350px] md:w-[400px] bg-brand-dark border border-brand-border shadow-2xl flex flex-col h-[500px]"
        >
          {/* Header */}
          <div className="p-4 border-b border-brand-border bg-brand-slate/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-sm">
                <Bot className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-black text-xs uppercase tracking-widest leading-tight">Aliança AI</h3>
                <span className="text-brand-sky text-[10px] font-bold uppercase animate-pulse">Online Agora</span>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <motion.div
                initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-blue text-white font-medium' 
                    : 'bg-brand-slate text-slate-200 border border-brand-border'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-slate p-3 border border-brand-border flex gap-1">
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Rapid Links */}
          <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-brand-border bg-brand-slate/20">
             <a href="https://wa.me/5521992136779" target="_blank" className="flex-none px-3 py-1 bg-green-600/20 text-green-500 text-[10px] font-black uppercase border border-green-600/30">WhatsApp</a>
             <a href="https://www.facebook.com/profile.php?id=61561919086367" target="_blank" className="flex-none px-3 py-1 bg-blue-600/20 text-blue-500 text-[10px] font-black uppercase border border-blue-600/30">Facebook</a>
             <a href="#gallery" onClick={onClose} className="flex-none px-3 py-1 bg-brand-blue/20 text-brand-sky text-[10px] font-black uppercase border border-brand-blue/30">Nossa Galeria</a>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-brand-border">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte sobre nossos serviços..."
                className="w-full bg-brand-slate border border-brand-border text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-blue hover:text-brand-sky transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
