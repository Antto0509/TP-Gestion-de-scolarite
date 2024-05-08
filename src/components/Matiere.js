export default function Matieres() {
    return (
        <div>
            <h1>Matières</h1>
            <p>Vous trouverez ci-dessous la liste des matières</p>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mathématiques</td>
                    <td>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}