import { ReactNode } from 'react';
import { Navbar } from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16"> {/* Add padding top to account for fixed navbar */}
        {children}
      </main>
    </div>
  );
};
