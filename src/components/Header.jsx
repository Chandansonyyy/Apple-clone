import React from 'react'

const Header = () => {
  return (
    <>
      <div class="navbar">
            <div class="logo">
                <img src="./images/downloada.png" alt="logo" />
            </div>
            <ul id="nav-list">
                <li> Store  </li>
                <li> Mac </li>
                <li> iPad </li>
                <li> iPhone </li>
                <li>  Watch </li>
                <li> AirPods</li>
                <li> TV & Home </li>
                <li>  Entertainment </li>
                <li> Accessories  </li>
                <li>   Support </li>
                <img  class="cross" src="./images/close-116-512.png" alt="cross" />
            </ul>
            <div class="nav-icons">
                <img src="./images/downloada2.png" alt="search" />
                <img src="./images/icons8-bag-24.png" alt="shopping" />
                <img class="menuopen" src="./images/hamburger-menu-5.png" alt="menu" />
            </div>
        </div>
    </>
  )
}

export default Header