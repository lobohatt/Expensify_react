import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (

  <div>
    This is  from my dashboard component
  </div>


)

const AddExpensePage = () => (

  <div>
    This is  from my AddExpensePage component
  </div>

)

const EditExpensePage = () => (
  <div>
    This is from my EditExpensePage component
  </div>
);


const HelpPage = () => (
  <div>
    Help
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));


