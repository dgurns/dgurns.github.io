import React from 'react';
import Project from './Project';

export default function Software() {
  return (
    <div className="software">
      <div className="software__mainDescription">
        Hello! I{"'"}m a software developer in New York{"'"}s beautiful Hudson Valley.
        <br /><br />
        I specialize in designing and building cross-platform apps, with a focus on
        React and React Native.
        <br /><br />
        Also: Founder of Concert Window and accordion player.
        <br /><br />
        Get in touch: <br />
        <a href="mailto:gurney.dan@gmail.com">gurney.dan@gmail.com</a>
        <br /><br />
        My writing: <br />
        <a href="http://medium.com/@dgurns">medium.com/@dgurns</a>
      </div>

      <div className="software__sectionTitle">
        <div className="software__blueDivider" />
        <h2>Latest Projects</h2>
      </div>

      <Project />

      <div className="projectContainer">
        <div className="projectImage">
          <img src="images/i123.png" alt="i123" />
        </div>
        <div className="projectInfo">
          <div className="projectInfoSection">
            inspector123 - Mobile Tool for Inspectors
          </div>
          <div className="projectInfoSection">
            <div className="appStoreImage">
              <a href="https://itunes.apple.com/us/app/inspector123/id1269271714?ls=1&mt=8">
                <img src="images/AppStore.png" alt="App store" />
              </a>
            </div>
            <div className="appStoreImage">
              <a href="https://play.google.com/store/apps/details?id=com.inspector123">
                <img src="images/GooglePlay.png" alt="Google Play" />
              </a>
            </div>
          </div>
          <div className="projectInfoSection">
            <a href="https://medium.com/@dgurns/making-the-inspector123-app-2097acf463c9">
              Read about how it was made
            </a>
          </div>
        </div>
      </div>

      <div className="projectContainer">
        <div className="projectImage">
          <img src="images/Fed.png" />
        </div>
        <div className="projectInfo">
          <div className="projectInfoSection">
            F'ed - Career Re-Training for Millennials
          </div>
          <div className="projectInfoSection">
            <div className="appStoreImage">
              <a href="https://itunes.apple.com/us/app/fed-career-re-training-for-millennials/id1246455050?ls=1&mt=8">
                <img src="images/AppStore.png" />
              </a>
            </div>
            <div className="appStoreImage">
              <a href="https://play.google.com/store/apps/details?id=com.millennialjobs">
                <img src="images/GooglePlay.png" />
              </a>
            </div>
          </div>
          <div className="projectInfoSection">
            <a href="https://github.com/dgurns/MillennialJobs">
              See the codebase
            </a>
          </div>
        </div>
      </div>

      <div className="projectContainer">
        <div className="projectImage">
          <img src="images/LivingSketchbook2.png" />
        </div>
        <div className="projectInfo">
          <div className="projectInfoSection">
            Living Sketchbook Vol. 2: Metro North
          </div>
          <div className="projectInfoSection">
            <div className="appStoreImage">
              <a href="https://appsto.re/us/hLg0ib.i">
                <img src="images/AppStore.png" />
              </a>
            </div>
            <div className="appStoreImage">
              <a href="https://play.google.com/store/apps/details?id=com.livingsketchbook2">
                <img src="images/GooglePlay.png" />
              </a>
            </div>
          </div>
          <div className="projectInfoSection">
            <a href="https://about.udemy.com/students/entrepreneurial-music-lover-finds-his-groove-building-mobile-apps/">
              Read about it on the Udemy Blog
            </a>
          </div>
        </div>
      </div>

      <div className="projectContainer">
        <div className="projectImage">
          <img src="images/LivingSketchbook1.png" />
        </div>
        <div className="projectInfo">
          <div className="projectInfoSection">
            Living Sketchbook Vol. 1: Boyhood Home
          </div>
          <div className="projectInfoSection">
            <div className="appStoreImage">
              <a href="https://itunes.apple.com/us/app/living-sketchbook-vol-1-boyhood-home/id1209783393?ls=1&mt=8">
                <img src="images/AppStore.png" />
              </a>
            </div>
            <div className="appStoreImage">
              <a href="https://play.google.com/store/apps/details?id=com.livingsketchbook1">
                <img src="images/GooglePlay.png" />
              </a>
            </div>
          </div>
          <div className="projectInfoSection">
            <a href="https://medium.com/@dgurns/building-the-living-sketchbook-app-231a1cf5252">
              Read about the build process
            </a>
          </div>
        </div>
      </div>

      <div className="projectContainer">
        <div className="projectImage">
          <img src="images/GurneyJourney.jpg" />
        </div>
        <div className="projectInfo">
          <div className="projectInfoSection">
            Gurney Journey
          </div>
          <div className="projectInfoSection">
            <div className="appStoreImage">
              <a href="https://itunes.apple.com/us/app/gurney-journey/id1179475898?ls=1&mt=8">
                <img src="images/AppStore.png" />
              </a>
            </div>
            <div className="appStoreImage">
              <a href="https://play.google.com/store/apps/details?id=com.gurneyjourney">
                <img src="images/GooglePlay.png" />
              </a>
            </div>
          </div>
          <div className="projectInfoSection">
            <span className="lightGray">
              5 stars on the App Store & Google Play
            </span>
          </div>
        </div>
      </div>
      <div className="sectionTitle">
        <div className="blueDivider" />
        <h2>My Process</h2>
      </div>
      <div className="processContainer">
        <div className="processLabel">
          <div className="processNumber">
            1
          </div>
        </div>
        <div className="processInfo">
          <span className="bold">Wireframing</span><br />
          Every project is different, but once the strategy has been firmed up,
          I usually begin by wireframing the core user interface. This includes
          navigation, flows between views, and the impact of different
          screen sizes. I like to do this on paper or with software
          like Balsamiq.
        </div>
      </div>
      <div className="processContainer">
        <div className="processLabel">
          <div className="processNumber">
            2
          </div>
        </div>
        <div className="processInfo">
          <span className="bold">Design</span><br />
          For the design phase, I draw on my experience leading product at
          Concert Window, a live broadcasting platform with 150,000 users. I
          strive for simplicity, beauty, and intuitiveness. One thing I love to
          do is creating interfaces for completely new activities; I also love
          adapting and polishing. I usually do designs in Sketch.
        </div>
      </div>
      <div className="processContainer">
        <div className="processLabel">
          <div className="processNumber">
            3
          </div>
        </div>
        <div className="processInfo">
          <span className="bold">Development</span><br />
          This is the real meat of the process, and one of the benefits of
          doing everything under one roof. The development phase joins a unified
          flow with wireframing, design, testing, and launch, and I can revisit
          the other phases as necessary. I usually build apps in React Native,
          which enables cross-platform releases for iOS and Android smartphones
          + tablets.
        </div>
      </div>
      <div className="processContainer">
        <div className="processLabel">
          <div className="processNumber">
            4
          </div>
        </div>
        <div className="processInfo">
          <span className="bold">Testing</span><br />
          Testing is when a good product becomes a great product. During this
          phase I iron out bugs, polish animations and interface, and conduct
          extensive cross-platform testing. I also like to do a beta program,
          which can be good for validating pricing and other pre-launch decisions.
        </div>
      </div>
      <div className="processContainer">
        <div className="processLabel">
          <div className="processNumber">
            5
          </div>
        </div>
        <div className="processInfo">
          <span className="bold">Launch</span><br />
          In addition to being a satisfying and exciting moment, launch is also
          important to get right. I do the advance planning to ensure a smooth
          rollout on the app stores. I{"'"}m also happy to brainstorm on successful
          strategies that I{"'"}ve used in the past to generate millions of dollars
          in product revenues.
        </div>
      </div>
      <div className="sectionTitle">
        <div className="blueDivider" />
        <div className="title">
          ABOUT ME
        </div>
      </div>
      <div className="aboutMeContainer">
        <div className="aboutMePhoto">
          <img src="images/DanGurneyPhotoCircle.png" alt="Dan Gurney" />
        </div>
        <div className="aboutMeBio">
          I{"'"}m a software developer with a design and entrepreneurial background. Before
          I started building apps, I founded a company called Concert Window
          which grew to over 150,000 users and generated millions of dollars in
          revenue. I{"'"}m also a musician with four albums under my belt. I love
          building and launching new things into the world, and these days I{"'"}m
          using my experience in technology and startups to help build great products.
        </div>
      </div>
      <div className="sectionTitle">
        <div className="blueDivider" />
        <div className="title">
          WANT TO GET IN TOUCH?
        </div>
      </div>
      <div className="contactMe">
        <a href="mailto:gurney.dan@gmail.com">Send me an email</a>
      </div>
    </div>
  );
}
