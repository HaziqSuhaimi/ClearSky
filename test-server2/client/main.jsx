import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import MainLayout from '/imports/layout/MainLayout'
import { renderRoutes } from '/imports/api/routes.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-target'));
});
