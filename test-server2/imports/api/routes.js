import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// route components
import MainLayout from '/imports/layout/MainLayout';
import ChangeLayout from '/imports/layout/ChangeLayout';
import VoiceLayout from '/imports/layout/VoiceLayout';
import MyNavBar from '/imports/ui/MyNavBar';
import MyFooter from '/imports/ui/MyFooter';

export const renderRoutes = () => (
  <div>
  <MyNavBar />
    <BrowserRouter>
      <main>
        <Route path="/" exact component={MainLayout} />
        <Route path="/change" exact component={ChangeLayout} />
        <Route path="/voice" exact component={VoiceLayout} />
      </main>
    </BrowserRouter>
    <MyFooter />
  </div>
);
