import React from 'react';

export class AccountCreation extends React.Component {

    constructor() {
        super();
    }


    handleSubmit(e) {
        // Prevents reinitialization
        e.preventDefault();
        let name = this.state.name;

        fetch('http://localhost:8080/UserAccount/createAccount?'
            + 'userName=' + name , {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res =>{
            if(res.ok){
                this.setState({success: 'Successfully created'});
            }
            else{
                this.setState({success: 'Already exists'});
            }
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text"  />
                    </label>

                    <input type="submit" value="Create Account!" />
                </form>
                Name: {this.state.name}
                <br/>
                Message: {this.state.name} + {this.handleSubmit}
            </div>
        );
    }
}
