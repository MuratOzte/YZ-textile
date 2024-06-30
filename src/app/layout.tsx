import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav/Nav';
import { Providers } from '@/store/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'YZ Textile',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Providers>
                <body className={inter.className}>{children}</body>
            </Providers>
        </html>
    );
}
