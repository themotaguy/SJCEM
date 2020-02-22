import React, { Component } from 'react'
import Axios from 'axios'
import fire from '../Config/Config'

export class ShowTasks extends Component {

    componentDidMount() {
        var email;
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
              var email=user.email;
              console.log(email)
              console.log('insdide');
              var url='http://localhost:8000/api/pending_task/';
            Axios.post(url,{'email':email}).then(res => {
                console.log(res);
                console.log(res.error);
            })

            } else {
              // No user is signed in.
            }
          });


       
        // console.log("hefbebfefb");
        // fire.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //       // User is signed in.
        //       email=user.email;
        //     } else {
        //       // No user is signed in.
        //     }
        //   });
       
    }
    
    render() {
        return (
            <div>
                <h2>hello</h2>
            </div>
        )
    }
}

export default ShowTasks
