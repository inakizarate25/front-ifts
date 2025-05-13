import React from 'react';
import AppRouter from './routes/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
