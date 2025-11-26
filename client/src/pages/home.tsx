import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronUp, Mail, Phone, Tv, Wind, Snowflake, Wifi, Car, Bike, UmbrellaIcon, Microwave, Coffee, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroImage from '@assets/WhatsApp Image 2025-11-25 at 19.34.37_1764096879069.jpeg';
import livingRoom1 from '@assets/WhatsApp Image 2025-11-25 at 19.31.52 (2)_1764096879056.jpeg';
import kitchen1 from '@assets/WhatsApp Image 2025-11-25 at 19.31.52 (3)_1764096879057.jpeg';
import diningRoom from '@assets/WhatsApp Image 2025-11-25 at 19.31.52 (4)_1764096879058.jpeg';
import kitchen2 from '@assets/WhatsApp Image 2025-11-25 at 19.31.52 (5)_1764096879058.jpeg';
import livingRoom2 from '@assets/WhatsApp Image 2025-11-25 at 19.31.53 (1)_1764096879059.jpeg';
import balconyView from '@assets/WhatsApp Image 2025-11-25 at 19.31.53 (2)_1764096879060.jpeg';
import terrace from '@assets/WhatsApp Image 2025-11-25 at 19.31.53 (3)_1764096879060.jpeg';
import livingRoom3 from '@assets/WhatsApp Image 2025-11-25 at 19.31.53 (5)_1764096879062.jpeg';
import livingRoom4 from '@assets/WhatsApp Image 2025-11-25 at 19.31.53_1764096879062.jpeg';
import welcomeSet from '@assets/WhatsApp Image 2025-11-25 at 19.31.54 (2)_1764096879062.jpeg';
import bathroom1 from '@assets/WhatsApp Image 2025-11-25 at 19.31.54 (3)_1764096879063.jpeg';
import bathroom2 from '@assets/WhatsApp Image 2025-11-25 at 19.31.54 (4)_1764096879063.jpeg';
import shower from '@assets/WhatsApp Image 2025-11-25 at 19.31.54 (6)_1764096879064.jpeg';
import livingRoomTV from '@assets/WhatsApp Image 2025-11-25 at 19.31.54_1764096879064.jpeg';
import bedroom from '@assets/WhatsApp Image 2025-11-25 at 19.31.55 (6)_1764096879065.jpeg';
import bathtub from '@assets/WhatsApp Image 2025-11-25 at 19.31.55_1764096879066.jpeg';
import kitchen3 from '@assets/WhatsApp Image 2025-11-25 at 19.31.56 (1)_1764096879066.jpeg';
import kitchen4 from '@assets/WhatsApp Image 2025-11-25 at 19.31.56 (2)_1764096879067.jpeg';
import kitchen5 from '@assets/WhatsApp Image 2025-11-25 at 19.31.56 (3)_1764096879068.jpeg';

const galleryImages = [
  { src: livingRoom1, alt: 'Soggiorno con vista mare' },
  { src: kitchen1, alt: 'Cucina con decorazione mare' },
  { src: diningRoom, alt: 'Sala da pranzo' },
  { src: livingRoom2, alt: 'Soggiorno elegante' },
  { src: balconyView, alt: 'Vista dal balcone' },
  { src: terrace, alt: 'Terrazza con tavolino' },
  { src: livingRoomTV, alt: 'Soggiorno con TV' },
  { src: bedroom, alt: 'Camera da letto' },
  { src: bathroom1, alt: 'Bagno moderno' },
  { src: kitchen3, alt: 'Cucina attrezzata' },
  { src: kitchen5, alt: 'Cucina con forno' },
  { src: welcomeSet, alt: 'Set di benvenuto' },
];

const services = [
  { icon: Tv, label: 'Smart TV' },
  { icon: Snowflake, label: 'Aria Condizionata' },
  { icon: Wind, label: 'Ventilatore' },
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Car, label: 'Garage' },
  { icon: Bike, label: 'Biciclette' },
  { icon: UmbrellaIcon, label: 'Accesso Spiaggia + Ombrelloni' },
  { icon: Microwave, label: 'Microonde' },
  { icon: Coffee, label: 'Macchina del Caffè' },
];

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { scrollY } = useScroll();
  
  const heroHeight = useTransform(scrollY, [0, 400], ['100vh', '50vh']);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      setShowStickyHeader(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      {showStickyHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h2 className="font-serif text-xl md:text-2xl text-primary text-center">
              Casa di Franco e Simona
            </h2>
          </div>
        </motion.header>
      )}

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative overflow-hidden"
        style={{ height: heroHeight }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ opacity: heroOpacity }}
        >
          <img
            src={heroImage}
            alt="Vista mare dal balcone"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-transparent" />
        </motion.div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-white"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Benvenuto
            </h1>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic drop-shadow-lg">
              Ti presentiamo la casa di Franco e Simona
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* About & Gallery Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
              Il Tuo Rifugio sul Mare
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              Scopri il nostro elegante appartamento fronte mare, situato in una posizione privilegiata con accesso diretto alla spiaggia. Perfetto per chi cerca una vacanza rilassante all'insegna del comfort e della bellezza del mare Mediterraneo.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              L'appartamento è stato recentemente rinnovato con arredi moderni e di qualità, mantenendo il calore e l'accoglienza tipici della tradizione italiana. Ogni dettaglio è stato curato per offrirti un soggiorno indimenticabile.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Con ampie finestre che si affacciano sul mare turchese, terrazze soleggiate e tutti i comfort moderni, questo è il luogo ideale per creare ricordi preziosi con la famiglia e gli amici.
            </p>
          </motion.div>

          {/* Carousel Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl text-primary mb-4">Galleria</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
              {galleryImages.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-72 snap-start cursor-pointer hover-elevate transition-all rounded-lg overflow-hidden"
                  onClick={() => openLightbox(index)}
                  data-testid={`carousel-image-${index}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Photo Gallery */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-primary text-center mb-12"
          >
            Esplora Ogni Angolo
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer hover-elevate transition-all rounded-lg overflow-hidden group"
                onClick={() => openLightbox(index)}
                data-testid={`gallery-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-primary text-center mb-12"
          >
            Servizi e Comfort
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover-elevate transition-all" data-testid={`service-${index}`}>
                  <service.icon className="w-10 h-10 mx-auto mb-4 text-foreground/70" strokeWidth={1.5} />
                  <p className="text-base font-medium text-foreground">{service.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="relative py-12 px-4 md:px-8 lg:px-12 bg-muted/50">
        {/* Wave Decoration */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '60px', transform: 'translateY(-100%)' }}>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-full"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-muted/50"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-8">
            Contattaci
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:info@casafrancoesimona.it"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-5 h-5" />
              <span>info@casafrancoesimona.it</span>
            </a>
            
            <a
              href="tel:+393331234567"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-5 h-5" />
              <span>+39 333 123 4567</span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-border mt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Casa di Franco e Simona. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full shadow-lg bg-primary text-primary-foreground hover-elevate active-elevate-2 transition-all cursor-pointer"
          style={{ width: '56px', height: '56px' }}
          data-testid="button-back-to-top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
            data-testid="button-close-lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-primary transition-colors z-50"
            data-testid="button-prev-image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-primary transition-colors z-50"
            data-testid="button-next-image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div
            className="max-w-7xl max-h-[90vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[90vh] object-contain"
              data-testid="lightbox-image"
            />
            <p className="text-center text-white mt-4 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
