function accueil() {
    return (
        <div className="container">
            <div className="accueil">
                <h1>Bienvenue sur l'application de gestion de scolarité de l'IUT d'Amiens</h1>
                <p>Vous pouvez naviguer sur le site grâce à la barre de navigation ci-dessus.</p>
                <div className="informations-universite">
                    <h2>Informations sur l'IUT d'Amiens</h2>
                    <p className="presentation">
                        L'Institut Universitaire de Technologie d'AMIENS, créé en 1968, assure un ENSEIGNEMENT SUPÉRIEUR PUBLIC à finalité professionnelle immédiate permettant également les poursuites d'études.
                        Sa mission jusqu'en 2021, est de dispenser en deux ans, aux étudiants titulaires du baccalauréat ou d'un diplôme équivalent, une formation générale et une formation pratique sanctionnées par un diplôme national, le Diplôme Universitaire de Technologie, le DUT.
                        Depuis plus de 50 ans, le réseau des IUT a su perpétuer un positionnement particulier au sein de l'Enseignement Supérieur et de la Recherche.
                    </p>
                    <p className="presentation">
                        Le Bachelor Universitaire de Technologie (B.U.T), le nouveau diplôme des IUT, accueille sa première promotion en Septembre 2021.
                        Ce diplôme est dispensé sur 3 ans, aux étudiants titulaires du baccalauréat ou d'un diplôme équivalent.
                        C'est une formation générale et pratique sanctionnée par un diplôme national de Grade Licence dans le Schéma LMD.
                    </p>
                    <ul>
                        <li>
                            <b>Email:</b> contact@iut-amiens.fr
                        </li>
                        <li>
                            <b>Téléphone:</b> 03 22 53 40 40
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default accueil;

