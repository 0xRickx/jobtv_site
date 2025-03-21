import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Play, BriefcaseIcon, Users, ChevronDown } from 'lucide-react';
import Login from './pages/Login';

function App() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleLogin = () => {
     window.location.href = 'http://www.jobtv.site:5174/login'
  };

  const handleHome = () => {
    navigate('/');
  };


  const brands = [
    {
      name: "Pole Emploi",
      logo: "https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/660ad829a868be00cbe7205f_WhatsApp%20Image%202024-04-01%20at%2016.34.49%20(1).jpeg",
    },
    {
      name: "Assistente",
      logo: "https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/660ad8290bd3d436f7b1b6e0_WhatsApp%20Image%202024-04-01%20at%2016.07.11.jpeg",
    },
    {
      name: "Flunch",
      logo: "https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/660ad8290b0c340abd683719_WhatsApp%20Image%202024-04-01%20at%2016.34.50%20(1).jpeg",
    },
    {
      name: "ivsgroup",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7b_jwNY92xFz2V3XNYOhQ1wX1pbQGwgArQg&s",
    },
    {
      name: "cerveceria gambinus",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRvqQXLxxbpIX2tzSAvZ1_b9D25LrT3uVgQ&s",
    },
    {
      name: "vips",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMdk7ROpM15FHP1gTa3EucxBR5JUSTr7j4A&s",
    },
    {
      name: "bagatelle",
      logo: "https://bagatelle.com/app/themes/bagatelle/assets/bagatelle_logo.png",
    },
    {
      name: "billy tacos",
      logo: "https://www.espravenna.it/wp-content/uploads/2024/02/loog_billytacos.jpg",
    },
    {
      name: "pizza express",
      logo: "https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/660ad82c7344610928d05e5c_WhatsApp%20Image%202024-04-01%20at%2016.34.53.jpeg",
    },
    {
      name: "nando's",
      logo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/ac/b5/7a/nando-s-uk-logo.jpg?w=900&h=500&s=1",
    }
  ];

  const faqs = [
    {
      question: "Basta CV?",
      answer: "Abbiamo creato jobtv per molti motivi, il primo è quello che, quando invi un curriculum, mandi un elenco di quello che hai fatto, e non viene analizzata la tua crescita e leesperienza, puoi aver lavorato in grandi multinazionali e non saper lavorare."
    },
    {
      question: "1000 CV non in target?",
      answer: "Se sei un selezionatore, ricevi migliaia di Cv, spesso il 70% sono fuori target, di figure che pur di lavorare provano a”sparare” nel mucchio e inviano cv a caso,con JOB TV se indichi il target di riferimento, ricevi solo connession filtratee in target."
    },
    {
      question: "EMPATIA e  LOQUACITA’",
      answer: "In JOBtv, nonmettiamo in connessione (a volte capita certo) HEAD HUNTER con grandi aziende,la nostra mission è quella di connettere aziende del territorio con persone volenterose, empatiche e capaci, che però non hanno talvota grandi cv daesibire perchè si sono concentrati solo sul proprio lavoro, e sul farlo bene e al meglio."
    },
    {
      question: "RAPIDITA' e MODERNITA’",
      answer: "Basta scartoffie,potrai avere una “prima impressione” della tua nuova azienda o del tuo nuovo collaboratore, vedendo un breve messaggio (30sec.) su un’app e scegliere se approfondire e chattare o passare oltre, e risolvi tutto IN UN MATCH! "
    }
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end space-x-4">
          <button onClick={handleLogin} className="text-white hover:text-blue-200 px-4 py-1 text-sm">
            Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700">
            Registrati
          </button>
        </div>
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleHome}>
            <img src="https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/65e617318f30401effcd1795_logo%20jobtv%20no%20web-PhotoRoom%201.svg" />
            <span className="text-2xl font-bold text-blue-600">JobTV</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Chi Siamo</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <img src="https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/6658c350930e9fd5c361043b_WhatsApp%20Image%202024-04-19%20at%2000.25.38%20(1).jpeg" loading="lazy" sizes="(max-width: 479px) 82vw, (max-width: 767px) 80vw, (max-width: 1439px) 450px, 550px" srcset="https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/6658c350930e9fd5c361043b_WhatsApp%20Image%202024-04-19%20at%2000.25.38%20(1)-p-500.jpeg 500w, https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/6658c350930e9fd5c361043b_WhatsApp%20Image%202024-04-19%20at%2000.25.38%20(1)-p-800.jpeg 800w, https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/6658c350930e9fd5c361043b_WhatsApp%20Image%202024-04-19%20at%2000.25.38%20(1).jpeg 1060w" alt="" class="image-8"/>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Se stai cercando lavoro o sei un datore di lavoro in cerca di talento, sei nel posto giusto!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
              JobTV.it è il punto d'incontro innovativo dove le esigenze di chi CERCA LAVORO e CHI CERCA CANDIDATI, si collegano rapidamente con un MATCH! Registrando un video in cui rispondi a poche brevi domande, l'AI ti permette di creare una scheda, in target con le tue esigenze, e in un attimo sarai in contatto con tuo prossimo DATORE di LAVORO o COLLABORATORE facilmente dal tuo smartphone!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
            
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">PER LE AZIENDE</h3>
              <p className="text-gray-600 mb-4">
              Puoi trovare il lavoro dei tuoi sogni con pochi clicks.
              Creando un profilo unico dove mostri la tua personalità e indichi le tue competenze e quello che cerchi rispondendo a poche facili domande.
              Chatta direttamente con i datori di lavoro e programma colloqui.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Registrazione come AZIENDA
              </button>
            </div>
            <div className="text-center">
              
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">PER I CANDIDATI</h3>
              <p className="text-gray-600 mb-4">
              Scopri i candidati più adatti alle tue esigenze aziendali.
              Pubblica le tue offerte di lavoro in modo semplice ed efficace.
              Accedi a una vasta gamma di profili talentuosi e qualificati.
              Avvia conversazioni con candidati interessanti in pochi clic e raggiungi il tuo obbiettivo.

              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Registrazione come CANDIDATO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-8">Come funziona JobTV</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <h4 className="font-semibold text-lg">Visita il sito Job.tv</h4>
                </div>
                <p className="text-gray-600">Puoi connetterti sia da web che mobile al sito www.job.tv.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <h4 className="font-semibold text-lg">Scegli</h4>
                </div>
                <p className="text-gray-600">Scegli la sezione tra chi offre e chi cerca lavoro.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <h4 className="font-semibold text-lg">Registra il video</h4>
                </div>
                <p className="text-gray-600">Rispondi in un video di 1-2 minuti alle domande indicate e allegalo</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <h4 className="font-semibold text-lg">Compila il form</h4>
                </div>
                <p className="text-gray-600">Inserisci i tuoi dati e completa la registrazione</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                  <h4 className="font-semibold text-lg">Attendi la nostra verifica</h4>
                </div>
                <p className="text-gray-600">Verifichiamo il tuo video ed i tuoi dati e poi lo pubblichiamo su Job.tv</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">6</span>
                  <h4 className="font-semibold text-lg">Finito</h4>
                </div>
                <p className="text-gray-600">Il tuo profilo è completo e visibile nella ricerca.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Ecco i 10+ Brand che credono nel nostro lavoro</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Aiutiamo le persone e le aziende a conciliarsi per lavorare insieme
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
          </div>
          <h2 className="text-3xl font-bold text-center mb-12">Perché JobTV</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-left">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sei pronto per JobTV?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
          Facilità di gestione dei processi di selezione: Job TV è uno strumento  per gestire tutto il processo di selezione del personale, dalla pubblicazione degli annunci all'invio di  offerte di lavoro.
          </p>
          <img src="https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/6634b6d350c286a39efe36e1_WhatsApp%20Image%202024-05-03%20at%2005.07.10.jpeg" loading="lazy" sizes="(max-width: 700px) 100vw, (max-width: 1000px) 750.5875244140625px, 743.0875244140625px" srcset="https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/6634b6d350c286a39efe36e1_WhatsApp%20Image%202024-05-03%20at%2005.07.10-p-500.jpeg 500w, https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/6634b6d350c286a39efe36e1_WhatsApp%20Image%202024-05-03%20at%2005.07.10.jpeg 626w" alt="" class="center"/>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="https://cdn.prod.website-files.com/65a573b843e860984eb62eb1/65e617318f30401effcd1795_logo%20jobtv%20no%20web-PhotoRoom%201.svg" />
                <span className="text-xl font-bold text-white">JobTV</span>
              </div>
              <p className="text-gray-400">
          
              JobTV.it è il punto d'incontro innovativo dove le esigenze di chi cerca lavoro si incontrano con le opportunità offerte dalle aziende, e dove il processo di assunzione diventa una vera e propria esperienza di "matching."
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Per candidati e aziende</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Chi siamo</a></li>
                <li><a href="#" className="hover:text-white">Contattaci</a></li>
        
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Social Media</h4>
              <ul className="space-y-2">
                <li><a href="https://www.facebook.com/groups/1414943966081994/" className="hover:text-white">Facebook</a></li>
                <li><a href="https://www.linkedin.com/company/job-tv/?viewAsMember=true" className="hover:text-white">LinkedIn</a></li>
                <li><a href="https://whatsapp.com/channel/0029VaEMyJ5GOj9iWOyY6z25#" className="hover:text-white">Whatsapp</a></li>
                <li><a href="https://www.instagram.com/job_tv_app?igsh=MWo4aWQzMXg3MzlwdA%3D%3D&utm_source=qr" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JobTV. All rights reserved. - Realizzato e Sviluppato da Netcat S.r.l</p>
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
