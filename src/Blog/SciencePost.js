import React, { Component } from 'react'

export class SciencePost extends Component {
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
                        <a  class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </header>
        <section class="section" >
            <div class="container">
                <div class="row">
                  
                    <div class="col-lg-8 col-md-7">
                        <div class="">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                                <div class="position-relative">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZubQsSa-lTWo_H8wLC1pjEIBuE8xMLS28b9A6aqn6HqLmsLvG" class="img-fluid rounded-top" alt=""/>
                                </div>
                                <div class="content p-4">
                                   
                                    <p class="text-muted mt-3">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. </p>
                                    <blockquote class="blockquote mt-3 p-3">
                                        <p class="text-muted mb-0 font-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                    </blockquote>
                                    <p class="text-muted">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
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
            </div>
        )
    }
}

export default SciencePost
