import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import one from "src/resources/images/one.jpg";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Inbox",
    url: "/folder/Inbox",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Outbox",
    url: "/folder/Outbox",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Favorites",
    url: "/folder/Favorites",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Images",
    url: "/folder/images",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: "Audio",
    url: "/folder/audio",
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
  {
    title: "Videos",
    url: "/folder/video",
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
];


const Menu = () => {
  const location = useLocation();
  return (
    <IonMenu className="side-menu" contentId="main" type="overlay">
      <IonContent className="main-header">
        <IonList>
          <IonListHeader>
            <div className="image-container">
              <img src="src/resources/images/one.jpg" />
            </div>
          </IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
