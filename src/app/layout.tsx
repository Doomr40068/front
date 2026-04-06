import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import './globals.css';
import Header from '@/widgets/header';
import Footer from '../widgets/footer/footer';
import { contactAPI } from '@/entities/contact/api/contacts-api';

const unboundedSemiBold = Unbounded({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Киберия',
    description: 'Сайт от студента',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const contacts = await contactAPI.getContact();
    return (
        <html lang="en" className={unboundedSemiBold.className}>
            <body className="!p-5">
                <Header contacts={contacts} />
                {children}
                <Footer contacts={contacts} />
            </body>
        </html>
    );
}
