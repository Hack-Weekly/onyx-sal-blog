// We're going to be only the sections/divs that return a True match for any search query. By default, as there is no search, we're going to be displaying the whole blog page. 
// As a user enters a string in the search from, we're going to be hiding any sections/divs that do not contain the searched string.
// Therefore, going forward, any new blog post/section will have to have the section/div nested in the isVisible function as well as contain data-id as an attribute in the section/div itself. 

const Blog = ({ visibleElements }) => {

  const isVisible = (dataId) => {
    if (visibleElements.length === 0) return true;
    return visibleElements.includes(dataId);
  };

  return(
    <>
      <div id="section-and-aside">
      {/* this sections holds our blog poast with everything inside of it 
          <span> is what changes the font color
      */}
      {/* blog-id-1 */}
      {isVisible('1') && (
        <section data-id="1">
          <h1 id="blog-id-1">This is the first post for the onyx crew</h1>
          <h3>March 31st 2023 | <span>onyx spring</span></h3>
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
          <span>Tags</span> | <span>Story</span>
        </section>
      )}

        {/* blog-id-2 */}
      {isVisible('2') && (
        <section data-id="2">
          <h1 id="blog-id-2">Salamander Ashes</h1>
          <h3>March 6th 2023 | <span>onyx winter</span></h3>
          <p>Once upon a time, a group of adventurers set out to claim the throne of Most Valuable Pizza.
            <br></br>
            <br></br>
            They had heard that the current ruler, Ticket, had hired a group of mercenaries to defend his claim to the throne.
            Undeterred, the adventurers marched forward, determined to defeat the Ticket mercenaries and claim the throne for themselves. The battle was fierce, with each side exchanging blows and struggling for control of the battlefield.
            <br></br>
            <br></br>
            Despite their best efforts, the adventurers found themselves unsure if they would be able to emerge victorious. The Ticket mercenaries were well-trained and fiercely loyal to their employer, and they fought with a ferocity that seemed impossible to overcome.
            As the battle raged on, the adventurers began to fear that they would never be able to claim the throne of Most Valuable Pizza. But they refused to give up, drawing upon their strength and determination to keep fighting.
            <br></br>
            <br></br>
            In the end, the outcome of the battle was uncertain, with neither side gaining a clear advantage. The adventurers retreated to regroup and plan their next move, unsure if they would ever be able to claim the throne they so desperately sought.
            But they knew that they could never give up, and so they continued to fight, always holding onto the hope that one day they would emerge victorious and claim the throne of Most Valuable Pizza for themselves.
          </p>
          <span>Tags</span> | <span>Simple Blog Search </span>
        </section>
        )}
        {/* blog-id-3 */}
        {isVisible('3') && (
        <section data-id="3">
          <h1 id="blog-id-3">Storm's Fury</h1>
          <h3>March 22th 2023 | <span>Storm's Fury</span></h3>
          <p>Once upon a time, the group of adventurers found themselves on a quest to retrieve a magical artifact known as the Eye of the Storm. They had heard that the Eye had the power to control the very elements of nature, and they knew that if they could retrieve it, they could use its power to achieve their greatest desires.
            <br></br>
            <br></br>
            Their journey took them through treacherous mountains and across raging rivers, with danger at every turn. They encountered fierce beasts and battled with ruthless bandits, using all their skills and wits to stay alive.
            But despite the odds against them, the adventurers pressed on, driven by their desire to claim the Eye of the Storm. They finally reached their destination, a hidden temple deep in the heart of the jungle, where the Eye was said to be kept.
            <br></br>
            <br></br>
            As they made their way through the temple, they encountered traps and puzzles that tested their minds and their courage. But they persevered, finally reaching the chamber where the Eye was kept.
            <br></br>
            <br></br>
            With trembling hands, they reached for the artifact, feeling its power course through their veins. They knew that they had achieved something great, something that would change the course of their lives forever.
            And so, the adventurers emerged from the temple as heroes, the Eye of the Storm in their possession, ready to face whatever challenges lay ahead.
          </p>
          <span>Tags</span> |
          <span>#story</span>
          <span>#artifacts</span>
          <span>#heroes</span>
        </section>
        )}


        {/* blog-id-4 */}
        {isVisible('4') && (
        <section data-id="4">
          <h1 id="blog-id-4">The Storms Brew</h1>
          <h3>March 5th 2023 | <span>onyx winter</span></h3>
          <p>Deep in the mountains, Bruinbrewinbeer was brewing a batch of his famous beer. As he stirred the bubbling concoction, he felt a sense of restlessness. He knew that there were adventures waiting for him out there, and he couldn't resist the call of the unknown.
            <br></br>
            <br></br>
            So, he set out from his mountaintop home, determined to seek out new experiences and meet new people. As he traveled through the wilderness, he encountered iSonic, Nathanjs, and Stephenodea54, each on their own quests.
            Together, they journeyed across the land, battling monsters and overcoming obstacles that would have deterred lesser adventurers. Along the way, they learned to trust each other and rely on each other's unique strengths.
            <br></br>
            <br></br>
            Their journey eventually led them to a great mountain range, where they found themselves facing four elemental dragons. The dragons were fearsome opponents, each with the power to control one of the elements of nature.
            At first, the adventurers were unsure if they could defeat the dragons. But they drew upon their courage and their knowledge of the elements, using their wits and their weapons to weaken the dragons one by one.
            <br></br>
            <br></br>
            Finally, as they faced the last dragon, they realized that they needed something more to win the battle. And so, Bruinbrewinbeer pulled out the Storm's Fury, the magical artifact he had been carrying with him all along.
            <br></br>
            <br></br>
            With the Eye of the Storm in their possession, the adventurers were able to harness the power of the elements themselves. They used the artifact to call forth a great storm, the likes of which the dragons had never seen.
            As the storm raged on, the dragons were weakened and finally defeated, their power absorbed by the adventurers. Bruinbrewinbeer knew that he had found his true calling, as a brewer and an adventurer, and he felt a sense of contentment and joy that he had never known before.
            <br></br>
            <br></br>
            And so, as the adventurers sat around a campfire, drinking the beer that Bruinbrewinbeer had brewed, they knew that they had accomplished something great. They had overcome impossible odds, defeated powerful foes, and emerged stronger and more unified than ever before. They knew that whatever challenges lay ahead, they would face them together, with courage and determination, just like they had on this unforgettable journey.
          </p>
          <span>Tags</span> | <span>#brew</span>, <span>#dragons</span>, <span>#fiction</span>
        </section>
        )}
      </div>

      {/* <aside>
        <ul>
          <li><a href="#blog-id-1">onyx spring - The tale of Blog</a></li>
          <li><a href="#blog-id-2">onyx spring - salamander ashes</a></li>
          <li><a href="#blog-id-3">Storm's Fury</a></li>
          <li><a href="#blog-id-4">The Storm's Brew</a></li>

        </ul>
      </aside> */}
    </>
  );
};

export default Blog;
