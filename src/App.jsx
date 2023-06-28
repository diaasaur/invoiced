import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import useAppInitializer from './hooks/useAppInitializer';
import Home from './pages/home/Home';
import InvoiceView from './pages/invoice-view/InvoiceView';

export default function App() {
  useAppInitializer();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice/:invoiceId" element={<InvoiceView />} />
      </Routes>
    </Layout>
  );
}
