function menu() {
  return (
    <header>
      <nav>
        <ul>
          <a href="/"><img src="logo.png" alt="Logo de l'IUT d'Amiens" className="logo" /></a>
          <li>
            <a href="/" className="active">Accueil</a>
          </li>
          <li>
            <a href="/etudiants">Etudiants</a>
          </li>
          <li>
            <a href="/enseignants">Enseignants</a>
          </li>
          <li>
            <a href="/matieres">Matieres</a>
          </li>
          <li>
            <a href="/notes">Notes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default menu;