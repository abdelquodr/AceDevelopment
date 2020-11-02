import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../src/pages/Dashboard'
import Articles from '../src/pages/Articles'
import Task from '../src/pages/Task'
import Settings from '../src/pages/Settings'
import Admin from '../src/pages/Admin'
import CurriculumGuide from '../src/pages/CurriculumGuide'
import ShowSingleArticle from '../src/pages/ShowSingleArticle'
import ClassRoom from '../src/pages/ClassRoom'
import SignUp from '../src/pages/SignUp';
import Login from '../src/pages/Login'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path='/ace-dev' component={SignUp} />
            <Route path='/ace-dev/login' component={Login} />
            <Route path='/ace-dev/dashboard' component={Dashboard} />
            <Route path='/ace-dev/task' component={Task} />
            <Route path='/ace-dev/articles' component={Articles} />
            <Route path='ace-dev/articles/:id' component={ShowSingleArticle} />
            <Route path='/ace-dev/admin' component={Admin} />
            <Route path='/ace-dev/classroom' component={ClassRoom} />
            <Route path='/ace-dev/settings' component={Settings} />
            <Route path='/ace-dev/curriculum' component={CurriculumGuide} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
