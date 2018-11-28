import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const direct ='C:\lol';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
        <div className="FilesSearch">
            <p>Введите каталог для просмотра содержимого</p>
            <UserForm />
        </div>
      </div>
    );
  }
}
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({name: val});
}

  handleSubmit(e) {
    e.preventDefault();
    alert("Отправить " + this.state.name);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <p>
                <label>Директория:</label><br />
                <input type="text" value={this.state.name} onChange={this.onChange}/>
            </p>
            <input type="submit" value="Отправить" />
        </form>
    );
  }
}

/*const propsValues = { &&&&&&<ItemsList data={propsValues} /><ClickButton />&&&&&&
  title: "C:/",
  items: [
      "ONE", 
      "TWO", 
      "THREE", 
      "FOUR", 
      "FIVE", 
  ]
};
   
class Item extends React.Component {
  render() {
      return <li>{this.props.name}</li>;
  }
}
       
class ItemsList extends React.Component {
  constructor(props){
      super(props);
      this.state = { items: this.props.data.items};
               
      this.filterList = this.filterList.bind(this);
  }
  // фильтрация списка
  filterList(e){
      var filteredList = this.props.data.items.filter(function(item){
          return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
      });
      // обновление состояния
      this.setState({items: filteredList});
  }
   
  render() {
      return(
          <div>         
              <h2>{this.props.data.title}</h2>
              <input placeholder="Поиск" onChange={this.filterList} />
              <ul>
                  {
                      this.state.items.map(function(item){
                          return <Item key={item} name={item} />
                      })
                  }
              </ul>
          </div>);
  }
}

class ClickButton extends React.Component {
             
  constructor(props) {
      super(props);
      this.state = {class: "off", label: "Нажми"};
        
      this.press = this.press.bind(this);
  }
  press(){
      let className = (this.state.class==="off")?"on":"off";
      this.setState({class: className});
  }
  render() {
      return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
  }
}*/

export default App;
