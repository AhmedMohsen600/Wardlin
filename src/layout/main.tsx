import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../hooks/scrollToTop';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
