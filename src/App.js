import React, { useEffect,useRef } from "react";
import './App.css';
import anime from 'animejs'

function App() {
  const containerRef= useRef(null);
  useEffect(()=>{
    const container=containerRef.current;
    container.innerHTML="";

    for(let i=1;i<=100;i++){
      let dot=document.createElement("div");
      dot.classList.add("element")
      container.appendChild(dot);
    }
    let dotAll = container.querySelectorAll(".element");
    let animation=anime.timeline({
      targets : dotAll,
      easing: "easeInOutExpo",
      loop: true,
      delay: anime.stagger(100, { grid:[10,10], from: "center" }),
    });

    //first animation

    animation
    .add({
      rotateZ:180,
      translateY: anime.stagger(0, { grid:[10,10],from:"center", axis:"y"}),
      translateX: anime.stagger(0, { grid:[10,10],from:"center", axis:"x"}),
      opacity:1,
    })

    .add({
      borderRadius: 50,
    })

    .add({
      scale: 0.2,
      opacity: 0.2,
    })

    //second animation

    .add({
      rotateZ:180,
      translateY: anime.stagger(0, { grid:[10,10],from:"center", axis:"y"}),
      translateX: anime.stagger(0, { grid:[10,10],from:"center", axis:"x"}),
      opacity:1,
    })

    .add({
      scale:1,
      borderRadius: 0,
    })

    .add({
      rotateZ: -90,
    });


  },[])
  

  return (
    <div>
      {/* header section start */}
      <header>
        {/* Logo area */}
        <a href='#' className='logo'>
          Logo
        </a>
        {/* Navigation Area */}
        <ul>
          <li>
            <a href='#' className='active'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='active'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='active'>
              Work
            </a>
          </li>
          <li>
            <a href='#' className='active'>
              Contact
            </a>
          </li>
        </ul>
      </header>
      {/* header section end */}

      {/* section hero */}
      <section>
        {/* content area start */}
        <div className='content'>
          <h2>
            Web Page Using <b>Anime.js</b>
          </h2>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
          </p>
          <a href='#' className='btn'>
            Learn More
            </a>
        </div>
        {/* content area end */}

        {/* animated area */}
        <div className='container' ref={containerRef}></div>
      </section>

    </div>
  );
}

export default App;
