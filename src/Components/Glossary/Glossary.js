import React, {Component} from 'react';
import './glossary.css';

export default class Glossary extends Component {
  render(){
    return (
      <section className='main-container'>
        <h1 id='page-title'>Glossary</h1>
        <p>Here are some terms/strats that you will probably come across in your SMW speedrunning adventures.</p>
        <h3>Terms</h3>
        <ul>
          <li><b>Block duplication</b> is an abuse of poor collision to create extra blocks. This is done by hitting existing blocks with items at a particular position.</li>
          <li>A <b>clip</b> refers to falling through or getting stuck in any sort of solid platform.</li>
          <li><b>Cloud</b> usually refers to the item swap that gives you a cloud in your item box. For more information on this, see the CLOUD page.</li> {/* add link to /glitches/cloud */}
          <li><b>Corner boosts</b> occur when Mario hits the corner of walls or blocks while swimming upward. This gives Mario a small boost, and usually saves a frame or less.</li>
          <li><b>Fast Yoshi</b> is when Yoshi hatches quickly, which happens when you dupe a Yoshi block.</li>
          <li>
            <b>Flight</b>
            <ul>
              <li><b>Cannon fly</b> refers to a type of pipe fly that occurs in Mario being shot out of a cannon. This results in his speed being 64 subpixels per frame.</li>
              <li><b>Door fly</b> refers to an abuse of flight mechanics to retain flight through a door.</li>
              <li><b>Fast fly</b> is when Mario is travelling at 51 subpixels per frame. This is the fastest he can travel without cannon fly.</li>
              <li><b>Pipe fly</b> refers to an abuse of flight mechanics to retain flight through a pipe.</li>
              <li><b>Sticky fly</b> refers to an abuse of flight mechanics in which Mario sticks to a ceiling while flying.</li>
              <li><b>Yoshi fly</b> refers to an abuse of flight mechanics in which Mario enters the flying state while also riding Yoshi.</li>
            </ul>
          </li>
          <li><b>Item swapping</b> allows Yoshi to eat any sprite in the game by removing the item off of Yoshi's tongue as he is grabbing it.</li>
          <li><b>Key jumping</b> occurs when Mario jumps off of a key and grabs it on the same frame.</li>
          <li><b>Long jumps</b> are jumps in which the player taps the jump button, then regrabs and holds it. This results in a low jump and slow falling.</li>
          <li><b>Neutral jumps</b> are jumps in which the player does not hold a direction on the dpad. If executed on the frame that Mario lands, speed will not be lost.</li>
          <li>The <b>Orb</b> is a sprite that ends the level when Mario touches it. It only appears in one level naturally, but can be obtained with an item swap.</li>
          <li><b>P-switch jumps</b> happen when Mario jumps on the same frame that he lands on a p-switch. This is NOT called a yump.</li>
          <li><b>Shell jumps</b> occur when Mario throws a shell and bounces off of it.</li>
          <li><b>Wiggles</b> are quickly hitting left for a brief time while moving right.</li>
          <li><b>Yumps</b> happen when Mario jumps on the same frame that he lands on a switch palace switch.</li>
          <li><b>Zips</b> are an abuse of collision mechanics with turn blocks that result in Mario being pushed downward very quickly.</li>
        </ul>
        <h3>Strats</h3>
        <ul>
          <li><b>Ball skip</b> happens in the Bowser fight when you hit Bowser during the pause before he throws a ball. If done with the correct timing, he will throw one less ball.</li>
          <li><b>Blargg skip</b> is a strat in Vanilla Dome 3 that skips riding the skull raft after the midway point by bouncing off of a Blargg.</li>
          <li><b>Cape kill</b> refers to the quickest strat to defeat Bowser when Mario has a cape.</li>
          <li><b>Dirty Bubble</b> can be achieved by taking off before the first bubble in Forest of Illusion 3. This has been said to save anywhere from 10 to 30 minutes over the course of an entire run. (It actually only saves about six frames)</li>
          <li><b>Dirty Eerie</b> is achieved by taking off before the first two Eeries in Vanilla Ghost House. This also only saves a few frames.</li>
          <li><b>Fast Red</b> is a nickname for the fastest strategy to complete Red Switch Palace with a cape.</li>
          <li><b>Goal post eats</b> occur when Baby Yoshi eats the goal tape with an unintentional item swap in Star World 3.</li>
          <li><b>Left side clip</b> refers to doing a Yoshi clip on the left side of the ledge in Forest of Illusion 2.</li>
          <li><b>Morton Fly</b> refers to the strategy to navigate the vertical room of Morton's Castle with a cape.</li>
          <li><b>Raft Skip</b> is a strat in Vanilla Dome 3 that completely skips riding the skull raft after the midway by using Yoshi flight.</li>
          <li><b>Red Block Thing (RBT)</b> refers to the fastest strategy to complete Vanilla Dome 1 secret during a 96 Exit run.</li>
          <li>The <b>ride of shame</b> happens when the player fails to maintain flight on the skull rafts in Vanilla Dome 3.</li>
          <li><b>Roy Fly</b> refers to the strategy to navigate Roy's Castle.</li>
          <li><b>Sandbar clip</b> refers to the clip you can do in Valley of Bowser 2 secret to save 12 seconds.</li>
          <li><b>Sexy slide</b> refers to a strat to get to the key in Valley Ghost House.</li>
          <li><b>Underball</b> refers to jumping under the Podoboo in Iggy's Castle.</li>
          <li><b>Yolo Fly</b> is the process of skipping the second skull raft by not doing a turnback.</li>
        </ul>
      </section>
    )
  }
}