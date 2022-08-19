import React from 'react'
import img from './alone_namesmall.png'
import './Navbar.css'

function Navbar() {
    var loginflag= true;
    if(loginflag){
  return (
    <nav class="navbar navbar-expand-lg navbar-light font-weight-bold">
  <a class="navbar-brand" href=""><img src={img} width="140" height="30"  /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ">
      <li class="nav-item ">
        <a class="nav-link text-white" href="dashboard">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="seeds">My Seeds</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-white" href="friends">Friends</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-white" href="profile">Profile</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light my-2 my-sm-0 mr-sm-2" type="submit">Search</button>
      <button class="btn btn-danger my-2 my-sm-0" type="">LogOut</button>
    </form>
  </div>
</nav>
  )}
  else{
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-* font-weight-bold">
  <a class="navbar-brand" href="#"> <img src={img} width="140" height="30" alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link text-white" href="dashboard">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="aboutus">How it Works</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-white" href="features">Features</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-white" href="faq">FAQ</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light my-2 my-sm-0 mr-sm-2" type="submit">Search</button>
      <button class="btn btn-success  my-2 my-sm-0" type="">SignUp</button>
    </form>
  </div>
</nav>)
  }
}

export default Navbar