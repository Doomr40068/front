import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import './globals.css';
import Header from '@/widgets/header';
import Footer from '../widgets/footer/footer';

const unboundedSemiBold = Unbounded({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Киберия',
    description: 'Сайт от студента',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={unboundedSemiBold.className}>
            <body className="!p-5">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
