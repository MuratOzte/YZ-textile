import { Providers } from '@/store/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'YZ Textile',
    description: 'Clothing manufacturer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Providers>
                <Analytics />
                <body className={inter.className}>{children}</body>
            </Providers>
        </html>
    );
}
