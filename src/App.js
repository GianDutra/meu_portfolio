import React from 'react';
import Home from './pages/Home';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gian's Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="My Portfolio" />
      </Helmet>

      <Home></Home>
    </div>
  );
}

export default App;
