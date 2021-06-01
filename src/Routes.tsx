import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
const Home = React.lazy(() =>  import('./pages/Home'))

const Routes = () => (
  <HashRouter>
    <Switch>
      <Suspense fallback={null}>
        <Route exact path="/" component={Home} />
      </Suspense>
    </Switch>
  </HashRouter>
)

export default Routes
