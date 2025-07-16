import BootstrapClient from '@/components/BootstrapClient';
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Toastify from '@/components/Toastify';
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <AuthProvider>
      <Header />
        {children}
        <Toastify />
          <BootstrapClient />
        </AuthProvider>
      </body>
    </html>
  );
}
