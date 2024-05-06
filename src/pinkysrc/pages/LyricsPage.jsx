import React from 'react';
import { arrowBackOutline } from 'ionicons/icons';
import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import { useLyrics } from '../components/LyricsProvider';
import '../styles/LyricsPage.css';
import { useHistory } from "react-router-dom";


const LyricsPage = () => {
  const { lyrics, name } = useLyrics();
  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="lyrics-div">
          <div className="button-heading-div">
            <IonButton className="back-button" shape="round" fill="clear" size="small" color="primary" onClick={handleBackButton}>
              <IonIcon slot="icon-only" icon={arrowBackOutline} />
            </IonButton>
            <h2>{name}</h2>
          </div>
          <div className="Lyrics-content">
            {lyrics.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>

  );
};

export default LyricsPage;
