export default function Notes() {
    return (
        <div>
            <h1>Notes</h1>
            <p>Vous trouverez ci-dessous la liste des notes</p>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Etudiant</th>
                    <th>Matière</th>
                    <th>Note</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>DOE John</td>
                    <td>Mathématiques</td>
                    <td>12</td>
                    <td>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}