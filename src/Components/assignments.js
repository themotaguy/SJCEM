import React, { Component } from 'react'

export class assignments extends Component {
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
                <section class="bg-half-260 bg-light" style={{background: "url('images/crypto/bg.png') center center"}}>
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row mt-5 justify-content-center">
                            <div class="col-lg-10">
                                <div class="title-heading text-center">
                                    <img src="images\crypto\test.png" height="136" class="mover" alt=""/>
                                    <h1 class="heading text-primary text-shadow-title mt-4 mb-3">We wish you all the best for these tasks!</h1>
                                    
                                </div>                                
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        

        
        <section class="section border-top">
            
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <div class="table-responsive crypto-table bg-white shadow rounded">
                            <table class="table mb-0 table-center">
                                <thead>
                                    <tr>
                                       
                                        <th scope="col">Name of Student</th>
                                      
                                       
                                      
                                    </tr>
                                </thead>
                                {/* <tbody>
                                    {
                                        this.state.tasks ? 
                                        this.state.tasks.map(item => {
                                            return(
                                                <tr>
                                                    <th>
                                                        <p class="mt-2 mb-0 font-weight-normal h5">{item.task}  </p>
                                                    </th>
                                                    
                                                    <th >{item.status?<span class="text-success">Done</span>:<span class="text-danger">Pending</span>}</th>
                                                    <th>
                                                        <div class="form-check form-check-inline">
                                                            <div class="form-group">
                                                                <div class="custom-control custom-checkbox">
                                                                    <input checked={!!item.status} type="checkbox" class="custom-control-input" onChange={this.handleBox} id={item.id}/>
                                                                    <label class="custom-control-label" for={item.id}></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </th>
                                                </tr>
                                            )
                                        })
                                        :<></>
                                    }
                                    
                                </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
           
            </section>
            </div>
        )
    }
}

export default assignments
