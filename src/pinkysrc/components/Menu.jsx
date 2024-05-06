import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, archiveOutline, archiveSharp } from 'ionicons/icons';
import './Menu.css';


const appPages = [
  {
    title: 'Bhajans',
    url: '/folder/Bhajans',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Ashtothram',
    url: '/folder/Ashtothram',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Sahasranamam',
    url: '/folder/Sahasranamam',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Video Player',
    url: '/folder/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  }
  //,
  // {
  //   title: 'Trash',
  //   url: '/folder/Trash',
  //   iosIcon: trashOutline,
  //   mdIcon: trashSharp
  // },
  // {
  //   title: 'Spam',
  //   url: '/folder/Spam',
  //   iosIcon: warningOutline,
  //   mdIcon: warningSharp
  // }
];

const labels = ['Family', 'Friends', 'Notes'];

const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" className="menu-container">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <div className="image-container">
              <img src="src\styles\one.jpg" />
            </div>
          </IonListHeader>
          {/* <IonNote>hi@ionicframework.com</IonNote> */}
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  {/* <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} /> */}
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
