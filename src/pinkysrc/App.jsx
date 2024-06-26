import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import LyricsPage from './pages/LyricsPage';
import Bhajans from './pages/Bhajans';
import Menu from './components/Menu';
import Page from './pages/Page';
import Ashtothram from './pages/Ashtothram';
import Sahasranamam from './pages/Sahasranamam';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './styles/styles.scss';
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/folder/Bhajans" />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/folder/Ashtothram" exact={true}>
              <Ashtothram />
            </Route>
            <Route path="/folder/Sahasranamam" exact={true}>
              <Sahasranamam />
            </Route>
            <Route path="/folder/Bhajans" exact={true}>
              <Bhajans />
            </Route>
            <Route path="/lyrics" exact={true}>
              <LyricsPage />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
