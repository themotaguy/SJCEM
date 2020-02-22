import React, { Component } from 'react'
import fire from './Config/Config'
import firebase from 'firebase/app'
import Header from './UpAndDown/Header'
import PieChart from './Components/Chart'
import ColumnChart from './Components/BarGraph'

export class UserSignIn extends Component {
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
          UserLogin:''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.newFun = this.newFun.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.alert = this.alert.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        // this.readFullStory = this.readFullStory.bind(this);
        this.toggleFullStory = this.toggleFullStory.bind(this);
        // this.onSignInSubmit = this.onSignInSubmit.bind(this);
      }
      handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    
        handleChangeEmail(e){
          this.setState({email:e.target.value})
        }
    
        handleChangePass(e){
          this.setState({password:e.target.value})
        }
    
    
        login(e) {
          e.preventDefault();
          fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).catch((error) => {
              console.log(error);
              this.setState({errorMessage:error.message});
            });
        }
      
      
      
        signup(e){
          e.preventDefault();
          fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).then((u)=>{})
          .catch((error) => {
              console.log(error);
              this.setState({errorMessage:error.message});
            })
        }
    
 
        componentDidMount(){
    
        //   if(!this.state.user){
        
        //     firebase.auth().signInWithPopup(provider).then(function(result) {
        //       // This gives you a Google Access Token. You can use it to access the Google API.
        //       var token = result.credential.accessToken;
        //       // The signed-in user info.
        //       var user = result.user;
        //       // ...
        //     }).catch(function(error) {
        //       // Handle Errors here.
        //       var errorCode = error.code;
        //       var errorMessage = error.message;
        //       // The email of the user's account used.
        //       var email = error.email;
        //       // The firebase.auth.AuthCredential type that was used.
        //       var credential = error.credential;
        //       // ...
        //     });
           
        //   }
     
          
      
          console.log(this.state.newDataObj)
          let self = this
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        return firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      }); 
          fire.auth().onAuthStateChanged((user) => {
         
            if (user) {
              if(user.emailVerified){
                console.log("Verified User !!")
              }
              else{
                console.log("Not Verified Yet")
              }
              this.setState({ user });
              var user = firebase.auth().currentUser;
              var name, email, photoUrl, uid, emailVerified,data;
              
              data = this.state.displayName
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;  
                this.setState({displayName:uid})
                this.setState({email:email})
    
                if(localStorage.getItem('Username') == "null"){
                  if(this.state.username != ""){
                  localStorage.setItem("Username",this.state.username)
                  }
                  if(this.state.username == ""){
                    var db = firebase.firestore();
                      var docRef = db.collection("users").doc(this.state.user.uid);
    
                      docRef.get().then(function(doc) {
                          if (doc.exists) {
                             localStorage.setItem("Username",doc.data())
                             
                          }
                      })
                  }
                }
                if(localStorage.getItem('Username') != "null"){
                  this.setState({
                    valueToBePassed: localStorage.getItem('Username')
                  })
                }
            console.log(uid)
          
          
    
    
    
            var db = firebase.firestore();
    if(user){
      if(this.state.username != ""){
            db.collection("users").doc(this.state.displayName).set({
            name: localStorage.getItem('Username'),
            }).then(function() {
              console.log("Data Ojbect for new User created");
            });}
    
    
    
    
    
    if(this.state.username == ""){
      var docRef = db.collection("cities").doc("SF");
    
    docRef.get().then(function(doc) {
        if (doc.exists) {
      db.collection("users").doc(this.state.displayName).set({
        name: doc.data().name,
        }).then(function() {
          console.log("Data Ojbect for new User created");
         
        })
      
        } 
    })
    
    }
          }
    
          var docRef = db.collection("stories").doc(this.state.user.uid);
    
          docRef.get().then(function(doc) {
              if (doc.exists) {
                
                var hello = doc.data().story;
                console.log(hello)
                self.setState({myStory:hello})
                  console.log("Document data:", doc.data().story);
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
       
    
          db.collection("stories").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data().story);
                self.setState(prevState => ({
                  newDataObj: {                   // object that we want to update
                      ...prevState.newDataObj,    // keep all other key-value pairs
                      name: doc.id,
                      story:doc.data().story,
                      storyDescription:doc.data().storyDescription,
                      bool: doc.data().show ,
                      likes:100  ,
                      show:doc.data().show    // update the value of specific key
                  },
              }))
              self.setState({ allStories: [...self.state.allStories,self.state.newDataObj ] }) //simple value
              // self.setState({newDataObj:doc.id=doc.data()})
              console.log(self.state.allStories)
          
              
                self.setState({ peopleId: [...self.state.peopleId, doc.id ] }) //simple value
                self.setState({storyDescription : doc.data().storyDescription})
                    
            }); 
            console.log(self.state.bool)
            // console.log(self.state.allStories)
      // console.log(self.state.peopleId)
      console.log(self.state.storyDescription)
            
        });   
    var docRef = db.collection("users").doc(this.state.user.uid);
    
        docRef.get().then(function(doc) {
            if (doc.exists) {
              var hello = doc.data().name;
              self.setState({newVT:hello})
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
        
            } else {
              this.setState({ user: null });
              if(localStorage.getItem('Username') != null){
                localStorage.setItem("Username",null)
    
              }
              this.setState({valueToBePassed:''})
            }
          });
    
        }
    
        // componentDidMount() {
    
        //   fire.auth().onAuthStateChanged((user) => {
        //   if(user){
        //     if(localStorage.getItem('Username') == "null"){
        //       localStorage.setItem("Username",this.state.username)
        //     }
        //   }
        // })
        // }
        submit=(e)=>{
          let self = this
          e.preventDefault();
         console.log('hi')
         this.setState({text:""})
        
        
        
        }
    
        toggleFullStory(name){
          this.setState({nulledState:true})
          var db = firebase.firestore();
          db.collection("stories").doc(name).update({
              show:true
            }).then(function() {
              console.log("Data Ojbect for new User created");
            });
            window.location.reload();
        }
    
    
        logout(){
          firebase.auth().signOut();
        }
        
        handleChange(e){
          this.setState({[e.target.name]: e.target.value});
      }

       
      newFun(e){
        e.preventDefault();
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});

       }
        
alert(){
  alert('Email has been verified...')
}


    render() {
        return (
            <div>
                {this.state.user?(<> 
                  <div class="back-to-home rounded d-none d-sm-block">
                <a href="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
                
                {/* User Dashboard */}
                <Header name={this.state.username}/>
             

                <section class="bg-home" style={{backgroundImage: `url(images/single/bg01.jpg )`}} id="home">
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-8 col-md-9">
                                <div class="title-heading mt-4">
                                    <h1 class="display-3 font-weight-bold mb-3">Here I'm {this.state.username} <br/> <span class="element" data-elements="Calvin Carlo, UI/UX Designer, Web Developer"></span> </h1>
                                    <p class="para-desc text-muted">I am a user of Code Black .</p>
                                    <div class="mt-4 pt-2">
                                        {/* <a href="#portfolio" class="btn btn-primary mt-2 mr-2 mouse-down"><i class="mdi mdi-camera"></i> View Portfolio</a>
                                        <a href="#contact" class="btn btn-outline-primary mt-2 mouse-down"><i class="mdi mdi-cloud-download"></i> Hire Me</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
                    <div class="container">
                        <div class="row ">
                            <div class="col-lg-6 col-md-6 mb-4 pb-2">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                                <PieChart/>
                            </div>
                        
                            </div>
                            
                            <div class="col-lg-6 col-md-6 mb-4 pb-2">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                              <ColumnChart/>
                            </div>
                              
                            </div>
                            
                            <div class=" col-lg-12 col-md-12 mb-12 pb-12">
                            {/* <div class="blog position-relative overflow-hidden shadow rounded">
                            <LineChart/>
                            </div> */}
                                
                            </div>
                            
                        </div>
                    </div>
                </section>
           {this.state.user.emailVerified?(<>      <section class="section" style={{paddingTop:"10px"}} >
            <div class="container mt-100 mt-60" id="portfolio">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="work-container position-relative d-block overflow-hidden rounded">
                            <a class="mfp-image d-inline-block" href="/Quiz" title="">
                                <img src="images\single\QuizSkyWritingGeneric_large (1).jpg" class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                            </a>
                            <div class="content personal-port">
                                <a  class="title text-white d-block font-weight-bold">Shifting Perspective</a>
                                <small class="text-light">Quiz</small>
                            </div>
                            <div class="client personal-port">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Play a quiz & learn</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i>Code Black</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="work-container position-relative d-block overflow-hidden rounded">
                            <a class="mfp-image d-inline-block" href="/BlogPage" title="">
                                <img src="images\single\community.png" class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                            </a>
                            <div class="content personal-port">
                                <a class="title text-white d-block font-weight-bold"></a>
                                <small class="text-light">Carrier Guidance</small>
                            </div>
                            <div class="client personal-port">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Read Community Blogs</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> Code Black</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="work-container position-relative d-block overflow-hidden rounded">
                            <a class="mfp-image d-inline-block" href="/Bot"  title="">
                                <img src="images\single\340-3403351_chatbots-builder-pricing-crozdesk-robot-icon-png-white.png" class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                            </a>
                            <div class="content personal-port">
                                <a class="title text-white d-block font-weight-bold">Bot Interaction !</a>
                                <small class="text-light">Ruled Based Bot</small>
                            </div>
                            <div class="client personal-port">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i>Chat with our bot</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i>Code Black</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </section></>):(<><div class="form-group">
                <a class=" btn btn-primary" onClick={this.newFun}>Verfiy Your Account</a>
              </div></>)}
                 <button style={{paddingTop:'100p'}} class="btn btn-outline-primary m-3 mb-4" onClick={this.logout}>Logout</button> </>):(<> 
                  <div class="back-to-home rounded d-none d-sm-block">
                <a href="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>  <section class="cover-user bg-white">
            <div class="container-fluid">
                <div class="row position-relative">
                    <div class="col-lg-4 cover-my-30 order-2">
                        <div class="cover-user-img d-flex align-items-center">
                            <div class="row">
                                <div class="col-12">
                                    <div class="login_page position-relative">
                                        <div class="text-center">
                                            <h4 class="mb-4" href="/SignUp">Signup</h4>  
                                        </div>
                                        <form>
            <div class="form-group">
                <input type="Name" id="username" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="Occupation" value={this.state.Occupation} onChange={this.handleChange} name="Occupation" placeholder="Occupation" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="PhoneNumber" value={this.state.PhoneNumber}  onChange={this.handleChange} name="PhoneNumber" placeholder="PhoneNumber" class="form-control"/>
               
              </div>
              <div class="form-group">
                <input type="Phone Number" value={this.state.email} onChange={this.handleChangeEmail} name="signup-email" placeholder="Email Address" class="form-control"/>
              </div>
            
              <div class="form-group">
                <input type="password" value={this.state.password} onChange={this.handleChangePass} name="signup-password" placeholder="Password" class="form-control"/>
                <small class="text-muted">Must be at least 6 characters</small>
              </div>
              {/* <div class="form-group">
                <input type="password" value={this.state.confirmedPassword} name="signup-password-confirm" placeholder="Confirm password" class="form-control"/>
              </div> */}
              <div class="form-group">
                <button class="btn-block btn btn-primary" type="submit" onClick={this.signup}>Sign Up</button>
              </div>
           
              <div class="mx-auto">
                                                <p class="mb-0 mt-3"><small class="text-dark mr-2">Already have an account ?</small> <a href="/LogIn" class="text-dark font-weight-bold">Log in</a></p>
                                            </div>


                                            <h7  style={{color:'red',fontWeight:'bold'}}>{this.state.errorMessage}</h7>   
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="signup-agree"/>
                {/* <label class="custom-control-label text-small text-muted" for="signup-agree">I agree to the <a href="#">Terms &amp;
        Conditions</a>
                </label> */}
              </div>
              <hr/>
            </form>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>    

                    {/* <div class="col-lg-8 offset-lg-4 padding-less img order-1" style="background-image:url('images/user/02.jpg')" data-jarallax="{&quot;speed&quot;: 0.5}"></div>    */}

                    <div class="col-lg-8 offset-lg-4 padding-less img order-1" style={{backgroundImage:"url('images/user/02.jpg')"}} data-jarallax='{"speed": 0.5}'></div>
                </div>
            </div>
        </section></>)}
         
            </div>
        )
    }
}

export default UserSignIn
