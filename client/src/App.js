import React from "react";

function App() {
  return (
    <div className="App">
      <nav id="nav-bar">
        <h1><span>&gt; Onyx Sal Blog</span></h1>
        <ul>
          <li>Blog</li>
          <li>About</li>
          <li>Post</li>
          <li>Metrics</li>
        </ul>
      </nav>
       {/* This holds the section and aside in one container  */}
      <div id="section-and-aside">
        {/* this sections holds our blog poast with everything inside of it 
            <span> is what changes the font color
        */}
        <section>
          <h1>This is the first post for the onyx crew</h1>
          <h3>March 31st 2023 | <span>onyx spring - The tale of Blog</span></h3>
          <p>Once upon a time, in a faraway land, there were seven travelers who set out on a quest to meet the powerful enchanter named Blog. These seven travelers were named Bruinbrewinbeer, DKKKKKKKK, iSonic, Jc, Julian_P, Nathanjs the King, and Stephenodea54.
            The travelers had heard tales of Blog's incredible powers of enchantment and his minions, React, JavaScript, and TypeScript, who were said to be the strongest and most knowledgeable in all the land. The travelers knew that if they could gain the favor of Blog and his minions, they could achieve their wildest dreams.
            <br></br>
            <br></br>
            As they journeyed through the countryside, the travelers encountered many challenges, from treacherous terrain to fierce beasts. But they persevered, each using their unique skills and abilities to overcome every obstacle in their path.
            As they neared Blog's castle, they could feel the power emanating from within its walls. They were greeted by React, who welcomed them and led them to Blog's throne room.
            <br></br>
            <br></br>
            There, Blog sat on his throne, flanked by his minions, JavaScript and TypeScript. He listened intently as the travelers explained their quest and their desire to gain his favor.
            <br></br>
            <br></br>
            Blog was impressed by their determination and bravery, and he agreed to help them. He tasked JavaScript and TypeScript with teaching the travelers everything they needed to know about programming and web development, and he enchanted their weapons and tools with powerful spells to aid them on their journey.
            <br></br>
            <br></br>
            The travelers spent many weeks at Blog's castle, learning from his minions and honing their skills. When they were finally ready to set out once again, they knew they were stronger and more capable than ever before.
            With their new knowledge and enchanted gear, the travelers were able to overcome any obstacle that stood in their way. They forged a path through the wilderness and arrived at their destination, where they achieved their ultimate goal and changed the course of their lives forever.
            <br></br>
            <br></br>
            And so, the tale of the seven travelers and their encounter with Blog and his minions was passed down through the ages as a testament to the power of determination, knowledge, and enchantment.</p>
            <span> Dark Theme</span> | <span>Simple Blog Search </span>
        </section>

        <section>
          <h1>This is the first post for the onyx crew</h1>
          <h3>March 31st 2023 | <span>onyx spring - The tale of Blog</span></h3>
          <p>Once upon a time, in a faraway land, there were seven travelers who set out on a quest to meet the powerful enchanter named Blog. These seven travelers were named Bruinbrewinbeer, DKKKKKKKK, iSonic, Jc, Julian_P, Nathanjs the King, and Stephenodea54.
            The travelers had heard tales of Blog's incredible powers of enchantment and his minions, React, JavaScript, and TypeScript, who were said to be the strongest and most knowledgeable in all the land. The travelers knew that if they could gain the favor of Blog and his minions, they could achieve their wildest dreams.
            <br></br>
            <br></br>
            As they journeyed through the countryside, the travelers encountered many challenges, from treacherous terrain to fierce beasts. But they persevered, each using their unique skills and abilities to overcome every obstacle in their path.
            As they neared Blog's castle, they could feel the power emanating from within its walls. They were greeted by React, who welcomed them and led them to Blog's throne room.
            <br></br>
            <br></br>
            There, Blog sat on his throne, flanked by his minions, JavaScript and TypeScript. He listened intently as the travelers explained their quest and their desire to gain his favor.
            <br></br>
            <br></br>
            Blog was impressed by their determination and bravery, and he agreed to help them. He tasked JavaScript and TypeScript with teaching the travelers everything they needed to know about programming and web development, and he enchanted their weapons and tools with powerful spells to aid them on their journey.
            <br></br>
            <br></br>
            The travelers spent many weeks at Blog's castle, learning from his minions and honing their skills. When they were finally ready to set out once again, they knew they were stronger and more capable than ever before.
            With their new knowledge and enchanted gear, the travelers were able to overcome any obstacle that stood in their way. They forged a path through the wilderness and arrived at their destination, where they achieved their ultimate goal and changed the course of their lives forever.
            <br></br>
            <br></br>
            And so, the tale of the seven travelers and their encounter with Blog and his minions was passed down through the ages as a testament to the power of determination, knowledge, and enchantment.</p>
            <span> Dark Theme</span> | <span>Simple Blog Search </span>
        </section>

      </div>

        <aside>
          <ul>
            <li><a href="#tale-id">onyx spring - The tale of Blog</a></li>
            <li>Blog Link 2</li>
            <li>Blog Link 3</li>
            <li>Blog Link 4</li>
            <li>links 5</li>
            <li>links 6</li>
          </ul>
        </aside>

      <footer id="footer-bar">
        <ul>
          <li>Github Repository</li>
          <li>Team Page</li>
          <li>Blogs</li>
          <li>Something else</li>
        </ul>
        <p>All Rights Reserved</p>
      </footer>



    </div>
  );
}
export default App;
