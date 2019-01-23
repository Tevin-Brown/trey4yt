import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#whatisyt">What is a YT?</a></li>
            <li><a className="smoothscroll" href="#thecampaign">The Campaign</a></li>
            <li><a className="smoothscroll" href="#experience">Experience</a></li>
            <li><a className="smoothscroll" href="#endorsements">Endorsements</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Trey Walk <br/>for Young Trustee</h1>
            <h3>Insert Inspirational Purdy Quote?</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
