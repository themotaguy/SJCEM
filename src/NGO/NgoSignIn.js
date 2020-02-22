import React, { Component } from 'react'
import fire from '../Config/Config'
import firebase from 'firebase/app'

export class NgoSignIn extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    constructor(props){
        super(props);
        this.state={
          user: null,
          email: '',
          password: '',
          username:'',
          LastName:'',
          PhoneNumber:'',
          valueToBePassed:'',
          text:'',
          newVT:'',
          myStory:'',
          displayMenu: false,
          name:'',
          address:'',
          ngoName:'',
          lastName:'',
          typeOfNeedy:'',
          city:'',
          state:'',
          allStories:[],
          people:[],
          peopleId:[],
          items:[],
          readFullStory:false,
          storyDescription:'',
          newDataObj:{
            story:'',
            name:'',
            storyDescription:'',
            show:false,
          },
          bool:null,
          displayFullStory:false,
          nulledState:false,
          errorMessage:'',
          VerificationCode:'',
        }}

    componentDidMount(){
        fire.auth().onAuthStateChanged((user) => {
         
            if (user) {
                var db = firebase.firestore();
                db.collection("needy").get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                    });
                });
        
    }
})}

    render() {
        return (
            <div>
           <h1>Data is fetched here...</h1>
            </div>
        )
    }
}

export default NgoSignIn

