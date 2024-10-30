// App.js or your main component file

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Description from './components/Description';
import MultiStageForm from './components/MultiStageForm';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Description} />
                <Route path="/multi-stage-form" component={MultiStageForm} />
            </Switch>
        </Router>
    );
};

export default App;
