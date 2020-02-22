import React, { Component } from 'react'
import fire from '.././Config/Config'
import firebase from 'firebase/app'
import SciencePost from './SciencePost';


export class BlogPage extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            Scienceposts:[{
                postedBy:'mistryrohan',
                postTitle:'A Trapped-Ion Pair May Help Scale Up Quantum Computers',
                postContent:'Of the many divergent approaches to building a practical quantum computer, one of the most promising paths leads toward ion traps. In these traps, single ions are held still and serve as the basic units of data, or qubits, of the computer. With the help of lasers, these qubits interact with each other to perform logic operation'
                ,type:"science"
            },
            {
                postedBy:'preetSangh',
                type:"science",
                postTitle:'Infographics',
                postContent:'He is a shameless publicity whore, too. His reality show premiered on VH1 last year, and his blogsite is peppered with snaps of him cuddling Paris Hilton at premieres.'
            },
            {  type:"science",
                postedBy:'raj ghamsani',
                postTitle:'Surveys and Polls',
                postContent:'Armstrongs honesty has added to her popularity, and she has written about work, family life, postnatal depression, motherhood, puppies and her Mormon upbringing with the same candid and engaging voice. '
            },
            {  type:"science",
                postedBy:'ankit gupta',
                postTitle:'Screencasts',
                postContent:'Of the many divergent approaches to building a practical quantum computer, one of the most promising paths leads toward ion traps. In these traps, single ions are held still and serve as the basic units of data, or qubits, of the computer. With the help of lasers, these qubits interact with each other to perform logic operations.'

            },{type:'commerce',
                    postedBy:'Michael Torr',
                    postTitle:'CONTENT MARKETING',
                    postContent:' Ecommerce CMS: Why Content Still Reigns and 11 CMS to Get Your Message to Your Potential Customers'
                    
                },
                { type:'commerce',
                    postedBy:'rohan mistry',
                    postTitle:'Rants',

                  
                    postContent:'The incident caused such fierce debate that Dooce found itself turned into a verb that is used in popular parlance (often without users realising its evolution): ooced - to be fired from one job as a direct result of ones personal website.'
                    
                },
                {type:'commerce',
                    postedBy:'prrett danhj',
                    postTitle:'Sales',

                  
                    postContent:'One of the best-known personal bloggers (those who provide more of a diary than a soapbox or reporting service), Heather Armstrong has been writing online since 2001.'
                    
                },
                {type:'commerce',
                    postedBy:'Vaishnav Damani',
                    postTitle:'Operations Executive',

                  
                    postContent:'Site took off, boosted partly through close links to popular blog-building website Blogger (he later married one of the founders). And as the phenomenon grew quickly, Kottke became a well-known filter for surfers on the lookout for interesting reading.'
                    
                },
                {type:'commerce',
                    postedBy:'monika patel',
                    postTitle:'Space and Research',
                    postContent:' A couple of key moments boosted Kottke fame: first, being threatened with legal action by Sony for breaking news about a TV show, but most notably quitting his web-design job and going solo three years ago. A host of micropatrons and readers donated cash to cover his salary, but these days he gets enough advertising to pay the bills. He continues to plug away at the site as it enters its 10th year.'
                    
                },

        ],
            
        }
    }
   
    render() {
       
        return (
           <div>
               <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                   <div>
                    <a class="logo" href="/BlogPage">Blogs</a>
                </div>                 
                <div class="buy-button">
                    <a  class="btn btn-primary">Username</a>
                </div>
           
                <div class="menu-extras">
                    <div class="menu-item">
                      
                        <a class="navbar-toggle">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                      
                    </div>
                </div>
        
                <div id="navigation">
                 
                    <ul class="navigation-menu">
                        <li><a href="/BlogPage">Posts</a></li>
                        <li class="has-submenu">
                            <a href="javascript:void(0)">Create Post</a>
                            
                        </li>
        
                        
                    </ul>
                    <div class="buy-menu-btn d-none">
                        <a  class="btn btn-primary">Username</a>
                    </div>
                </div>
            </div>
        </header>
        <div style={{paddingTop:100,marginLeft:300}}>
{
            this.state.Scienceposts.map(temp => {
                return (
                    <a href={temp.type=="science" ? "/sciencePost" : "/commercePost" }>
                        <section class="section" style={{padding:0}}>
            <div class="container">
                <div class="row">
                  
                    <div class="col-lg-8 col-md-7">
                        <div class="">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                                {/* <div class="position-relative">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZubQsSa-lTWo_H8wLC1pjEIBuE8xMLS28b9A6aqn6HqLmsLvG" class="img-fluid rounded-top" alt=""/>
                                </div> */}
                                <div class="content p-4">
                            <h6><i class="mdi mdi-tag text-primary mr-1"></i><a href="javscript:void(0)" class="text-primary">{temp.type}</a></h6>
                                  
                            <p class="text-muted">{temp.postContent}</p>
                                    <div class="post-meta mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
                    </a>
                    
                )
            })
        }
        <a href="/artsPost">
                        <section class="section" style={{padding:0}}>
            <div class="container">
                <div class="row">
                  
                    <div class="col-lg-8 col-md-7">
                        <div class="">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                                {/* <div class="position-relative">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZubQsSa-lTWo_H8wLC1pjEIBuE8xMLS28b9A6aqn6HqLmsLvG" class="img-fluid rounded-top" alt=""/>
                                </div> */}
                                <div class="content p-4">
                            <h6><i class="mdi mdi-tag text-primary mr-1"></i><a href="javscript:void(0)" class="text-primary">Arts</a></h6>
                                  
                            <p class="text-muted">One can only wonder what Marshall McLuhan, who coined the phrase “The medium is the message,” would have thought about the Rest Stop Theatre Project, a novel outdoor mobile experience that takes place in the back of a beat-up pickup truck.</p>
                                    <div class="post-meta mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>53</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>88</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
                    </a>
        </div>
        
        
        </div>
        )
    }
}

export default BlogPage
