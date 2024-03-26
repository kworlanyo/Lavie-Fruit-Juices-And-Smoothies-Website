/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import aboutHero from "../../assets/about-hero.svg";

function About() {
  return (
    <div className="about-section">
      <div className="about-hero-container">
        <img
          src={aboutHero}
          alt=""
          data-aos="zoom-in"
          data-aos-duration="500"
        />
      </div>
      <div className="wrapper">
        <div className="about-content-container">
          <h2>About Us</h2>
          <p data-aos="zoom-in" data-aos-duration="1000">
            Hi there👋! We are Margaret and Hannah, the dynamic duo behind Lavie
            Juice and Smoothies. We started this amazing journey back in 2011.
            <br />
            <br />
            We've always loved whipping up delicious juices for our friends, and
            it wasn't long before we realized we could turn our passion into a
            business. From small gatherings to big bashes, we started taking
            orders for our refreshing creations at our friends' parties and
            events.
            <br />
            <br />
            And guess what? Our juices were such a hit that our friends couldn't
            stop talking about them😂! Before we knew it, we were getting
            referrals left and right, and Lavie became synonymous with top-notch
            juice and smoothies🍹.
            <br />
            <br />
            Fast forward to today, and we're still doing what we love, but on a
            much bigger scale. We're now the go-to juice supplier for event
            planners and organizers, delivering large quantities of our tasty
            concoctions with a smile. Our secret? Prompt delivery and a
            dedication to providing the friendliest customer service around.
            Join us on our journey and let Lavie Juice and Smoothies add a
            splash of flavor to your next event!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
