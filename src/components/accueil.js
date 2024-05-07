import Menu from './navigation/menu';

function accueil() {
    return (
        <div>
            <h1>Bienvenue</h1>
            <p>Vous trouverez ci-dessous les différentes fonctionnalités de l'application :</p>
            <Menu />
        </div>
    );
}

export default accueil;