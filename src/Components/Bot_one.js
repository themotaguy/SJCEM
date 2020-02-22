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
  
export class Bot1 extends Component {
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
          displayFullStory:false,
          nulledState:false,
          errorMessage:'',
          VerificationCode:'',
          UserLogin:'',
          userInput:'',
          userUid:'',
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

componentDidMount(value) {
    const { userInput } = this.state;    

    /* Format string from value of currentId and persist */
    localStorage.setItem( 'userInput', `${ userInput }`);
    
    this.setState({userInput:localStorage.getItem("userInput")})
    console.log(userInput)

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
             
             self.setState({user})
               var db = firebase.firestore();
   
   var docRef = db.collection("scores").doc(self.state.userUid);

   docRef.get().then(function(doc) {
       if (doc.exists) {
           console.log("Document data:", doc.data());
           self.setState({
               score_science: doc.data().score.science,
               score_commerce:doc.data().score.commerce,
               score_arts:doc.data().score.arts,
               score_sports:doc.data().score.sports,
               score_social:doc.data().score.social,


           })
           console.log(self.state.score_science)
       } else {
           // doc.data() will be undefined in this case
           console.log("No such document!");
       }
   }).catch(function(error) {
       console.log("Error getting document:", error);
   });
       }
   }
         )
}

 
state={
    user:null,
}
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
            <div className="" style={{display:'flex',justifyContent:'center'}}> 
             <ThemeProvider theme={theme}>
             <div class="back-to-home rounded d-none d-sm-block">
                <a href="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
                
    <ChatBot   
    headerTitle="May I Help you ?"
    recognitionEnable={true}
    speechSynthesis={{ enable: true, lang: 'en' }} 
    
    steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    
  
   
  ]}/>
  {/* <button style={{paddingTop:'100p'}} class="btn btn-outline-primary m-3 mb-4" onClick={this.logout}>Logout</button> */}
  </ThemeProvider>
               
            </div>
        )
    }
}

export default Bot1