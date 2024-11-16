import { Component } from "react";


export class List extends Component{
    constructor(){
        super();
        this.state = {
            userList: '',
            list: []
        }
    }

    onChangeEvent(e){
        this.setState({userList: e})
       
    }

    addList(input){
        if(input === ''){
            alert ('Введите планы на неделю')
        } else{
        let newItem = this.state.list;
        newItem.push(input);
        this.setState({list:newItem, userList: ''})
        console.log(input)
        }
    }

    deleteList(){
        let newItem = this.state.list;
        newItem = [];
        this.setState({list: newItem})
    }

    CrossedList(event){
        const line = event.target;
        line.classList.toggle('dltline');
    }

    render(){
        return(
            <div>
                <div className="container">
                    <input type="text"
                            placeholder="Какие планы на неделю?"
                            onChange={(e) => {this.onChangeEvent(e.target.value)}}
                            value={this.state.userList}
                    />
                </div>
                <ul>
                    {this.state.list.map((item, i)=>(
                        <li onClick={this.CrossedList} key={i}>{item}</li>
                    ))}                      
                </ul>
                <div className="container">
                    <button onClick={()=>this.addList(this.state.userList)}>Добавить</button>
                </div>
                <div className="container">
                    <button onClick={()=>this.deleteList()}>Удалить</button>
                </div>

            </div>
        )
    }
}