import { Component } from "react";


export class Myplanner extends Component{
        constructor(){
            super();
            this.state = {
                list: [],
                userInput: ''
            }
        }

        onChangeItem(e){
            this.setState({userInput:e})
            
        }
        

        addPlan(input){
            if(input === ""){
                alert ('Enter your plans on today')
            } else {
            let plan = this.state.list;
            plan.push(input);
            this.setState({list: plan, userInput:''})
            
        }}

        deletePlan(){
            let plan = this.state.list;
            plan = [];
            this.setState({list: plan})
        }

        crossedLine(event){
            let li = event.target;
            li.classList.toggle('crossed')
            
        }

        onFormSubmit(e){
            e.preventDefault()
        }

        render(){
            return(
                <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="header">
                        <h2>My planner</h2>
                    </div>
                    <div className="main">
                        <input type='text'
                        placeholder="Enter your plans..."
                        onChange={(e)=>{this.onChangeItem(e.target.value)}}
                        value={this.state.userInput}
                        />
                        
                    </div>
                   
                    <div className="main">
                        <button className="btn-add"  onClick={()=> this.addPlan(this.state.userInput)} >Add plan</button>
                    </div>
                    <ul>
                        {this.state.list.map((item, i)=>(
                            <li onClick={this.crossedLine} key={i}>{item}</li>
                        ))}
                    </ul>
                    <div className="main">
                        <button className="btn-dlt" onClick={()=> this.deletePlan()} >Delete plan</button>
                    </div>
                </form>
                </div>
            )
        }
}