import React from 'react'
import axios from 'axios';

class UserClass extends React.Component {
    constructor() {
        super();
        this.state = { users: []};
    }

    // async getUsers() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((users) => {
    //         this.setState({ users: users });
    //       });
    //   }

    

    //using axios
    async getUsers() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({users: res.data})
       
    }

    componentDidMount() {
        this.getUsers();
      }


    render() {
        return (
            <>
              {this.state.users.map((user) => {
          return <h1 key={user.id}>{user.name}</h1>;
        })}
            </>
        )
    }
}

export default UserClass;