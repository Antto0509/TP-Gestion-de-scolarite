function componentDidMount(){
    getAllEtuds((res)=>console.log(res))
}

getEtudiants= () => {
    getAllEtuds((res)=> {
        this.setState({
            Etuds: res.data
        })
    })
}
    
componentDidMount = () => {
    this.getEtudiants ();
}

addEtud = (num, nom, prenom, date) => {
    let newEtud={
        NumEtudiant: num,
        NomEtudiant: nom,
        PrenomEtudiant: prenom,
        DatenET: date,
    }
    add(newEtud, ()=> {
        this.getEtudiants ();
    })
}

{this.state. etuds.map((d, index)=>
<tr key={index} align='left'>
    <td>{d.code}</td> <td>{d.nom}</td>
    <td><button onClick={()=> remove(d._id,()=>this.getEtudiants())}>X</button></td>
</tr>)}