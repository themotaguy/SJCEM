import React, { Component } from 'react'
import fire from '.././Config/Config'
import {Link} from 'react-router-dom'

export class TeacherDash extends Component {
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div>
              <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                
                <div>
                    <a class="logo" href="index.html">Teach Mate</a>
                </div>                 
                <div class="buy-button">
                    <a href="" target="" class="btn btn-primary">Logout</a>
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
                        <li><a>Home</a></li>
                        
                    </ul>
                    
                </div>
            </div>
        </header>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 pb-2">
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src="images\blog\01.jpg" class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                                <h4><Link to="/upload" class="title text-dark">Upload Assignments</Link></h4>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4 pb-2">
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src="images\blog\02.jpg" class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                            <h4><Link to="/assignments" class="title text-dark">Check Assignments</Link></h4>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* <div class="col-lg-4 col-md-6 mb-4 pb-2">
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src="images\blog\03.jpg" class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                                <h4><a href="javascript:void(0)" class="title text-dark">Smartest Applications for Business</a></h4>
                                <div class="post-meta mt-3">
                                    <a href="javascript:void(0)" class="text-muted float-right readmore">Read More <i class="mdi mdi-chevron-right"></i></a>
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="author">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                    </div> */}
                    

                    
                    
                   
                </div>
            </div>
        </section>
         
            </div>
        )
    }
}

export default TeacherDash
