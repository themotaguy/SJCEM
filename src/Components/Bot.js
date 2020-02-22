import ChatBot, { Loading } from 'react-simple-chatbot';
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import fire from '.././Config/Config'
import firebase from 'firebase/app'
// import GetData from './GetData';

class DBPedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    const endpoint = encodeURI('https://dbpedia.org');
    const query = encodeURI(`
      select * where {
      ?x rdfs:label "${search}"@en .
      ?x rdfs:comment ?comment .
      FILTER (lang(?comment) = 'en')
      } LIMIT 100
    `);

    const queryUrl = `https://dbpedia.org/sparql/?default-graph-uri=${endpoint}&query=${query}&format=json`;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);

    function readyStateChange() {
      if (this.readyState === 4) {
        const data = JSON.parse(this.responseText);
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          self.setState({ loading: false, result: bindings[0].comment.value });
        } else {
          self.setState({ loading: false, result: 'Not found.' });
        }
      }
    }

    xhr.open('GET', queryUrl);
    xhr.send();
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const { trigger, loading, result } = this.state;

    return (
      <div className="dbpedia">
        { loading ? <Loading /> : result }
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            {
              !trigger &&
              <button
                onClick={() => this.triggetNext()}
              >
                Search Again
              </button>
            }
          </div>
        }
      </div>
    );
  }
}

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};
class Review extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        hobby: '',
        interest: '',
        time: '',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      console.log(steps);
      const { hobby, interest, time } = steps;
  
      this.setState({ hobby, interest, time });
    }
  
    render() {
      
      const { hobby, interest, time } = this.state;
      return (
        <div style={{ width: '100%'
}}>
          <h3>Summary</h3>
          <table>
            <tbody>
              <tr>
                <td>Hobby</td>
                <td>{hobby.value}</td>
              </tr>
              <tr>
                <td>Interest</td>
                <td>{interest.value}</td>
              </tr>
              <tr>
                <td>Time Dedication</td>
                <td>{time.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  Review.propTypes = {
    steps: PropTypes.object,
  };
  
  Review.defaultProps = {
    steps: undefined,
  };
  
export class Bot extends Component {
    constructor(props){
        super(props);
        this.state={
          user: this.props.user,
          email: '',
          password: '',
          username:'',
          LastName:'',
          PhoneNumber:'',
          valueToBePassed:'',
          text:'',
          newVT:'',
          myStory:'',
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
          userUid:'',
          displayFullStory:false,
          nulledState:false,
          errorMessage:'',
          VerificationCode:'',
          UserLogin:'',
          userInput:'',
          obj:{
            "name":'Preet'
          }
        }
        // this.meme=this.meme.bind(this);
    }
   handleState=(value)=>{
     this.setState({userInput:value});
     console.log('inside hadnle');
     console.log(this.state.userInput);
   }


   componentDidMount(){
    
 
    var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
name = user.displayName;
email = user.email;
photoUrl = user.photoURL;
emailVerified = user.emailVerified;
uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
               // this value to authenticate with your backend server, if
               // you have one. Use User.getToken() instead.
}

console.log(uid)
this.setState({userUid:uid})
 
      
  
  
      fire.auth().onAuthStateChanged((user) => {
     let self= this;
        if (user) {

          var db = firebase.firestore();
  db.collection("userInput").doc(user.uid).set({
  
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
          var user = firebase.auth().currentUser;
          var name, email, photoUrl, uid, emailVerified;
          
          if (user != null) {
          name = user.displayName;
          email = user.email;
          photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                         // this value to authenticate with your backend server, if
                         // you have one. Use User.getToken() instead.
          }
          self.setState({user})
          var db = firebase.firestore();
          console.log(user.uid)
this.setState({userUid:uid})

}
}
  )

}

// componentWillMount(value) {
  

//     var user = firebase.auth().currentUser;
//     var name, email, photoUrl, uid, emailVerified;
    
//     if (user != null) {
//       name = user.displayName;
//       email = user.email;
//       photoUrl = user.photoURL;
//       emailVerified = user.emailVerified;
//       uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                        // this value to authenticate with your backend server, if
//                        // you have one. Use User.getToken() instead.
//     }
    
//     console.log(uid)
//     console.log(user)
//     this.setState({userUid:uid})
         
              
          
          
//               fire.auth().onAuthStateChanged((user) => {
//              let self= this;
//                 if (user) {
                  
//                   self.setState({user})
//                   var db = firebase.firestore();
        
//       var docRef = db.collection("scores").doc(self.state.userUid);
    
//       docRef.get().then(function(doc) {
//         if (doc.exists) {
//           console.log("Document data:", doc.data());
//           self.setState({
//             score_science: doc.data().score.science,
//             score_commerce:doc.data().score.commerce,
//             score_arts:doc.data().score.arts,
//             score_sports:doc.data().score.sports,
//             score_social:doc.data().score.social,
    
    
//           })
//           console.log(self.state.score_science)
//         } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//         }
//       }).catch(function(error) {
//         console.log("Error getting document:", error);
//       });
//         }
//       }
//           )



//     // fire.auth().onAuthStateChanged((user) => {
         
//     //     if (user) {
//     //         var db = firebase.firestore();
//     //         db.collection("userInput").doc(user.uid).set({
//     //             values: this.state.obj
//     //         })
//     //         .then(function() {
//     //             console.log("Document successfully written!");
//     //         })
//     //         .catch(function(error) {
//     //             console.error("Error writing document: ", error);
//     //         });
//     //     }
//     //             })
// }

    render() {
     
        const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#0635e8',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#0635e8',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
        return (
            <div className="" style={{display:'flex',justifyContent:'center',marginTop:'100px'}}> 
             <ThemeProvider theme={theme}>
             <div class="back-to-home rounded d-none d-sm-block">
                <a href="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
                
    <ChatBot width='1000px'
    headerTitle="May I Help you ?"
    recognitionEnable={true}
    speechSynthesis={{ enable: true, lang: 'en' }} 
    
    steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
     
      validator:(value)=>{        
      
    fire.auth().onAuthStateChanged((user) => {
         
         if (user) {
             this.setState({user:user})
             var db = firebase.firestore();
             db.collection("userInput").doc(user.uid).update({
                 name: value
             })
         }
                 })
        return true;
      },
       trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger:'4',
    },
    {
        id:'4',
        message:"What is your favourite pass time ?",
        trigger:5
    },
    {
        id: '5',
        user:true,
          validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   passTime: value
               })
           }
                   })
          return true;
        },
        trigger:'6',
        
    },
    {
        id: '6',
        message: 'Ah ,{previousValue} is very Enjoyable',
    
       trigger:'7'
      },
      {
        id: '7',
     message:'Apart from that, do you like to Study?',
    
        trigger:'9'
      },
      {
        id: '9',
        options: [
          { value: 'Yes', label: 'Yes', trigger: '10' },
          { value: 'No', label: 'No', trigger: '10' },
        ],
        validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   likesToStudy: value
               })
           }
                   })
          return true;
        },
      },{
          id:'10',
          message:'If you were to draw for a potrait for an entire day, would you do it ? (Yes/No)',
          trigger:'101'
      },
      {id:'101',
      user:true,
   
        validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   drawForDay: value
               })
           }
                   })
          return true;
        },
        trigger:'1000',
      
      },{id:'1000',
      message:'If you were to do math and play around with statistics, would you do it..? Type (Yes/No)',
      trigger:'1001',
      },
      {id:'1001',
      user:true,
      validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   statsForDay: value
               })
           }
                   })
          return true;
        },
        trigger:'1002'
      },
      {id:'1002',
      message:"Do you like finance related stuff ?? (Yes/No)",
      trigger:'1003'},{id:'1003',
      user:true,
      validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   financeRelatedWork: value
               })
           }
                   })
          return true;
        },
        trigger:'100'}, 
           {
          id:'100',
          message:'Well, how many hours a day do you devote to studying..?',
        trigger:'11',
      },
      {
        id: '11',
     
        

        user:true,
        validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   hourStudying: value
               })
           }
                   })
          return true;
        },
       
        trigger: '12',
      },{id:'12',
      message:"How many hours would you go out and play if there was no one to stop you ?",
      trigger:'122'
      },
      {
        id:'122',
        user:true,
        validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   hourStudying: value
               })
           }
                   })
          return true;
        },
        trigger:123,
      },
      {
        id: '123',
        message: 'Ouu, that is great! I guess.. Now tell me how many hours do you spend on your phone ?  ',
        
    
        
        trigger: '13',
      },
      
      {
        
id: '13',
      user:true,
      validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   hourPhone: value
               })
           }
                   })
          return true;
        },
        trigger: 'yum',
      },{id:'yum',
      message:'Do you like research (Yes/No)',
      trigger: 'yum1'      },{
        id:'yum1',
        user:true,
        validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   hourPhone: value
               })
           }
                   })
          return true;
        },
        trigger:'yum'

      },
      {
        id:'yum',
        message:'Ummm...that is alright.. unless you finish your work properly.. Anyways before I help you out you need to tell me about your class. What standard are you currently studying in ?  '
        ,
       trigger:'15',
      },
      {
        id:'15',
        options: [
              { value: 'School', label: 'School', trigger: 'marksSchool' },
              { value: 'College', label: 'College', trigger: 'marksCollege' },
            ],
 
        validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   standard: value
               })
           }
                   })
          return true;
        },
    
      },
      {
          id:'marksCollege',
          message:'Well how much did you score in your last exam???  ( % )',
          trigger:'marks_value_College'
      },{
          id:'marks_value_College',
          user:true, validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   marks: value
               })
           }
                   })
          return true;
        },
        trigger:'marks_college'

      },{id:'marks_college'
      ,message:'Well {previousValue} is definitely not bad.. keep believeing in yourself...Speaking of which.. what field did you choose after your 10th SSC examinations??',
      trigger:'field_options'},
      {id:'field_options',
      options: [
              { value: 'Science', label: 'Science', trigger: 'Nice_choice_college' },
              { value: 'Commerce', label: 'Commerce', trigger: 'Nice_choice_college' },
              {  value: 'Arts', label: 'Arts', trigger: 'Nice_choice_college'}
            ],
           
          validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   college_field: value
               })
           }
                   })
          return true;
        },
      
      },
      {id:'Nice_choice_college',
      message:'{previousValue}.. interesting...What are your least favourite topics in college ?',
      trigger:'leastFavCollege'
      
      },
      {id:'leastFavCollege',
      user:true,
      validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   college_least_fav: value
               })
           }
                   })
          return true;
        },
        trigger:'iknowright'
      },{
          id:'iknowright',
          message:'Well, {previousValue} can be boring !! Anyways, looks like I have bored you enough for now..',
          trigger:'update',
      },
    
            {
            id: 'update',
            message: 'Would you like to take a quiz?',
            trigger:'wrap_up'
            },
        
      {
          id:'marksSchool',
          message:'Well, how much did you score in your last exam???',
          trigger:'marks_value',
      },
      {
          id:'marks_value',
          user:true,
          validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   marks: value
               })
           }
                   })
          return true;
        },
        trigger:'school'
      },
      {
        id:'school',
        message:'Umm.. {previousValue}, thats good but could have done better..Which subject do you like the most amongst the following ?',
        trigger:'subject-options',

      },
      {
          id:'subject-options',
        user:true,
        validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   subject_fav_school: value
               })
           }
                   })
          return true;
        },
            trigger:'Nice_choice'
         
            
      },{
          id:'Nice_choice',
          message:'Oh {previousValue} .. thats my favourite subject too.. Good Choice.. Now tell me which subjects do you hate the most ? :( ',  
         trigger:'hate-subs'
      },{id:'hate-subs',
      user:true,
      validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   hate_subs_school: value
               })
           }
                   })
          return true;
        },
      trigger:'iknowright_school'
      },
      {id:'iknowright_school',
      message:"{previousValue} .. I swear I hate them too...Anyways.. too much for now, would you like to take a quiz..It will help me analyse your situation even more.",
      trigger:'wrap_up'
      },
      {id:'wrap_up',
      options: [
          { value: 'Yes', label: 'Yes', trigger: 'GoToQuiz' },
          { value: 'Umm..Why Not !', label: 'Umm..Why Not !', trigger: 'GoToQuiz' },
        ],
      },
      {id:'GoToQuiz',
      message:'Great ! I hope you answer all questions correctly..Good Luck.. Go to Home -> Quiz to play the quiz !',
      end:true,
      },
      {
        id: '16',
        message:'Ah Okay ! Looks like my friend here is getting smarter and older..How much did you score in your latest exams',
        trigger: '17',

      },
      {
        id: '17',
        user:true,
        validator:(value)=>{        
      
      fire.auth().onAuthStateChanged((user) => {
           
           if (user) {
               var db = firebase.firestore();
               db.collection("userInput").doc(user.uid).update({
                   standard: value
               })
           }
                   })
          return true;
        },
        end:true
      }, 
  
   
  ]}/>
  {/* <button style={{paddingTop:'100p'}} class="btn btn-outline-primary m-3 mb-4" onClick={this.logout}>Logout</button> */}
  </ThemeProvider>
               
            </div>
        )
    }
}

export default Bot