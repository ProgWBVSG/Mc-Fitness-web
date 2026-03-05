import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contacto | MC Fitness Las Delicias',
    description: 'Contactá a MC Fitness Las Delicias por WhatsApp, email o visitanos en el Barrio Las Delicias, Córdoba.',
};

export default function ContactoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
