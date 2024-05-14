function componentDidMount(){
    getAllNotes((res)=>console.log(res))
}

getNotes= () => {
    getAllNotes((res)=> {
        this.setState({
            Notes: res.data
        })
    })
}

componentDidMount = () => {
    this.getNotes ();
}

addNote = (num, code, note, date) => {
    let newNote={
        NumEtudiant: num,
        CodeMat: code,
        Note: note,
        Date: date,
    }
    addNote(newNote, ()=> {
        this.getNotes ();
    })
}

{this.state. notes.map((d, index)=>
<tr key={index} align='left'>
    <td>{d.code}</td> <td>{d.note}</td>
    <td><button onClick={()=> removeNote(d._id,()=>this.getNotes())}>X</button></td>
</tr>)}