import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'MC Fitness Las Delicias',
  description: 'MC Fitness en Las Delicias con equipamiento premium, 5 entrenadores profesionales y ambiente familiar. Entrenamiento funcional + Pilates. ¡Primera clase gratis!',
  keywords: 'gimnasio Las Delicias, MC Fitness Córdoba, entrenamiento funcional, pilates Córdoba, MC Fitness',
  openGraph: {
    title: 'MC Fitness Las Delicias',
    description: 'MC Fitness en Las Delicias. Entrenamiento funcional + Pilates. Primera clase gratis.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
