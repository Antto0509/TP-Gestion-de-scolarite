function componentDidMount(){
    getAllEns((res)=>console.log(res))
}

getEnseignants= () => {
    getAllEns((res)=> {
        this.setState({
            Enss: res.data
        })
    })
}

componentDidMount = () => {
    this.getEnseignants();
}

addEns = (nom, prenom, grade, codemat) => {
    let newEns={
        CodeEns: this.state.enss.length !==0 ? (parseInt([...this.state.etuds].pop().code))+1 : 1,
        NomEns: nom,
        PrenomEns: prenom,
        GradeEns: grade,
        CodeMat: codemat,
    }
    addEns(newEns, ()=> {
        this.getEnseignants ();
    })
}

{this.state. enss.map((d, index)=>
<tr key={index} align='left'>
    <td>{d.code}</td> <td>{d.nom}</td>
    <td><button onClick={()=> removeEns(d._id,()=>this.getEnseignants())}>X</button></td>
</tr>)}