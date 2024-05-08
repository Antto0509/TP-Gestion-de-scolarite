export default function Etudiants() {
    return (
        <div>
            <h1>Etudiants</h1>
            <p>Vous trouverez ci-dessous la liste des étudiants</p>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>DOE</td>
                    <td>John</td>
                    <td>example@example.com</td>
                    <td>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}