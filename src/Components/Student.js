import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Student extends Component {
   
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
                        <li><a href="/teacher">Home</a></li>
                        
                    </ul>
                    
                </div>
            </div>
        </header>  
        <section class="bg-half bg-light">
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 text-center">
                                <div class="page-next-level">
                                    <h4 class="title"> Services </h4>
                                    <ul class="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                        <li><a href="index.html" class="text-uppercase font-weight-bold text-dark">Home</a></li>
                                        <li><a href="#" class="text-uppercase font-weight-bold text-dark">Pages</a></li> 
                                        <li>
                                            <span class="text-uppercase text-primary font-weight-bold">Services</span> 
                                        </li> 
                                    </ul>
                                </div>
                            </div>  
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        

     
        <div class="position-relative">
            <div class="shape overflow-hidden text-white">
                <svg viewbox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
       

       
        <section class="section">
            <div class="container">
                <div class="row">
                   

                        <div class="col-md-4 col-12">
                            <div class="features mt-5">
                                <div class="image position-relative d-inline-block">
                                    <img src="images\icon\pen.svg" alt=""/>
                                </div>

                                <div class="content mt-4">
                                    <h4 class="title-2"><a href="/pending"></a>Design & Development</h4>
                                    <p class="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                                </div>
                            </div>
                        </div>
                   
                    
                    
                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\video.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Management & Marketing</h4>
                                <p class="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\intellectual.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Stratagy & Research</h4>
                                <p class="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\user.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Easy To Use</h4>
                                <p class="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\calendar.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Daily Reports</h4>
                                <p class="text-muted mb-0">Allegedly, a Latin scholar established the origin of the text by compiling unusual established word.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 mt-5">
                        <div class="features">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\sand-clock.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Real Time Zone</h4>
                                <p class="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title mb-60">
                            <h4 class="title mb-4">Client Reviews</h4>
                            <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div id="customer-testi" class="owl-carousel owl-theme">
                            <div class="media customer-testi m-2">
                                <img src="images\client\01.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</p>
                                    <h6 class="text-primary">- Thomas Israel <small class="text-muted">C.E.O</small></h6>
                                </div>
                            </div>
                            
                            <div class="media customer-testi m-2">
                                <img src="images\client\02.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star-half text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "</p>
                                    <h6 class="text-primary">- Barbara McIntosh <small class="text-muted">M.D</small></h6>
                                </div>
                            </div>

                            <div class="media customer-testi m-2">
                                <img src="images\client\03.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                    <h6 class="text-primary">- Carl Oliver <small class="text-muted">P.A</small></h6>
                                </div>
                            </div>

                            <div class="media customer-testi m-2">
                                <img src="images\client\04.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "</p>
                                    <h6 class="text-primary">- Christa Smith <small class="text-muted">Manager</small></h6>
                                </div>
                            </div>

                            <div class="media customer-testi m-2">
                                <img src="images\client\05.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" There is now an abundance of readable dummy texts. These are usually used when a text is required. "</p>
                                    <h6 class="text-primary">- Dean Tolle <small class="text-muted">Developer</small></h6>
                                </div>
                            </div>

                            <div class="media customer-testi m-2">
                                <img src="images\client\06.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "</p>
                                    <h6 class="text-primary">- Jill Webb <small class="text-muted">Designer</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
            </div>
        )
    }
}

export default Student
