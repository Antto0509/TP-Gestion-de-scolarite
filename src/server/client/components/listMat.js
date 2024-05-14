function componentDidMount(){
    getAllMats((res)=>console.log(res))
}

getMatieres= () => {
    getAllMats((res)=> {
        this.setState({
            Mats: res.data
        })
    })
}

componentDidMount = () => {
    this.getMatieres ();
}

addMat = (nom, coef) => {
    let newMat={
        CodeMat: this.state.mats.length !==0 ? (parseInt([...this.state.etuds].pop().code))+1 : 1,
        LibelleMat: nom,
        CoefMat: coef,
    }
    addMat(newMat, ()=> {
        this.getMatieres ();
    })
}

{this.state. mats.map((d, index)=>
<tr key={index} align='left'>
    <td>{d.code}</td> <td>{d.nom}</td>
    <td><button onClick={()=> removeMat(d._id,()=>this.getMatieres())}>X</button></td>
</tr>)}