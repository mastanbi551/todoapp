import { Component } from "react";

class Test extends Component {
   state = {
    age: 42
   };

    render() {
        return <>
            <h1>Hi {this.state.info}</h1>
            <h3>age - {this.state.age}</h3>

            
        </>
    }
}

export default Test