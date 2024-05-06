import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonThumbnail, IonLabel } from '@ionic/react';
import SahasranamamData from '../data/sahasranamam.json'
const Sahasranamam = () => {

  const name = "Sahasranamam";


  const SahasranamamContainer = () => {

    return (
      <div className="container">
        {SahasranamamData.map((item, index) => (
          <IonCard key={index} className="ion-card-custom" onClick={() => handleCardClick(item.name, item.lyrics)} routerLink='/lyrics'>
            <div className="ion-card-custom-div">
              <IonThumbnail slot="start" className="ion-card-custom-img">
                <img alt="img" src="src\styles\om.png" />
              </IonThumbnail>
              <IonLabel className="ion-card-custom-label">
                {item.name}
              </IonLabel>
            </div>
          </IonCard>
        ))}
      </div>
    );
  };

  return (
    <IonPage className="sahasranamam-page">
      <IonHeader >
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SahasranamamContainer />
      </IonContent>
    </IonPage>
  );
}

export default Sahasranamam;  