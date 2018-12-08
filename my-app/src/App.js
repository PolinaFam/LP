import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkServerIdentity } from 'tls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
        <div className="FilesSearch">
            <p>Введите название папки</p>
            <UserForm />
        </div>
      </div>
    );
  }
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        folder:"",
        fullname:"",
        meth:""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClickCreate = this.onClickCreate.bind(this);
    this.onClickDelete= this.onClickDelete.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({folder: val});
    this.setState({fullname: ""});
    this.setState({meth: ""});
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  onClickCreate(){
      this.setState({fullname:this.state.folder});
      this.setState({meth:"create"})
      this.setState({folder:""});
  }
  onClickDelete(){
    this.setState({fullname:this.state.folder});
    this.setState({meth:"delete"})
    this.setState({folder:""});
}
  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <p>
                    <input type="text" value={this.state.folder} onChange={this.onChange}/>
                </p>
                <input type="submit" value="Создать" onClick = {this.onClickCreate}/>
                <input type="submit" value="Удалить" onClick = {this.onClickDelete}/>
            </form>
            <Stuff meth={this.state.meth} fold={this.state.fullname}/>
        </div>
    );
  }
}

class Stuff extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'prev_path':[],
            path:"",
            'files': [],
        }
    this.open= this.open.bind(this);
    }
    componentDidMount(){
        this.getF('http://127.0.0.1:8000/files/?urll=C:/',"");
    }
    componentDidUpdate(prevProps) {
        if ((this.props.meth !== prevProps.meth) && (this.props.meth !== "")) {
        var urlll='http://127.0.0.1:8000/files/?urll='+this.state.path+'&meth='+this.props.meth+'&fold='+this.props.fold;
        this.getF(urlll,"");  
     }
    }
    getF(url2, pathF){
            fetch(url2)
            .then(results => results.json())
            .then (results => { 
                if(!results.isFile) 
                    {this.setState({path: results.path, 'files':results.content})}
                else {window.location.href = "http://127.0.0.1:8000/download/?file="+pathF;}
            });

    }
    open(e){
       var val = e.target.innerHTML;
        this.state.prev_path.push(this.state.path);
        var fullpath = this.state.path + '/' + val ;
        var urll = 'http://127.0.0.1:8000/files/?urll=' + fullpath;
        this.getF(urll, fullpath);
    }

    render(){
        return (
           <div>
                <h2>Директория: {this.state.path}</h2>
                {this.state.files.map((f,i)=>(
                    <li key={i} onClick = {this.open}>
                        {f}
                    </li>
                ))}
            </div>
        )
    }
}

export default App;
