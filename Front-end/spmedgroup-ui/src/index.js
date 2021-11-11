import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import './index.css';

import Home from './pages/home/App';
import Login from './pages/login/Login';
import ConsultasPac from './pages/consultasPac/ConsultasPac';
import ConsultasMed from './pages/consultasMed/ConsultasMed';
import ConsultasAdm from './pages/consultasAdm/ConsultasAdm';
import CadastroCons from './pages/cadastroConsulta/CadastroConsulta';
import NotFound from './pages/notFound/NotFound'
import InserirDesc from './pages/inserirDescricao';

import reportWebVitals from './reportWebVitals';

/* const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const PermissaoComum = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '2' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);
 */

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Home */}
        <Route path="" component={Login}/>
        <Route path="" component={ConsultasAdm}/>
        <Route path="" component={ConsultasMed}/>
        <Route path="" component={ConsultasPac}/>
        <Route path="" component={CadastroCons}/>
        <Route path="" component={InserirDesc}/>
        


        <Route path="/notFound" component={NotFound} /> {/* Not Found */}
        <Redirect to="/notFound" /> {/* Redireciona para Not Found caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
