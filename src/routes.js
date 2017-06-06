import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Page from './components/wrappers/Page';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';

export const routes = (
 <Route path="/" title="App" component={Page}>
   <IndexRoute component={Home} />
   <Route path="Home" title="Home" component={Home} />
   <Route path="*" title="404: Not Found" component={NotFound} />
 </Route>
);

export default routes;
