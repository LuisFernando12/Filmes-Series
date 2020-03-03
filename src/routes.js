import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Movies from './pages/movies';
import Series from './pages/series';
import Strong from './pages/components/strong/index'
import Selected from './pages/selected'

export default function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Strong} />
            <Route path="/filmes"  component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/select/:type/:id" component={Selected} />

        </Switch>
    </BrowserRouter>
  );
}