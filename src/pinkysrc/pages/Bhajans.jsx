import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonThumbnail, IonLabel } from '@ionic/react';
import BhajansData from '../data/bhajans.json';
import { useLyrics } from '../components/LyricsProvider';

const Bhajans = () => {

  const name = "Bhajans";

  const BhajansContainer = () => {
    const { setLyrics, setName } = useLyrics();

    const handleCardClick = (name, lyrics) => {
      setName(name);
      setLyrics(lyrics);
    };

    return (
      <div className="container">
        {BhajansData.map((item, index) => (
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
    <IonPage className="bhajans-page">
      <IonHeader>
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
        <BhajansContainer />
      </IonContent>
    </IonPage>
  );
}

export default Bhajans;  