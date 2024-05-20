function menu() {
  return (
    <header>
      <nav>
        <ul>
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