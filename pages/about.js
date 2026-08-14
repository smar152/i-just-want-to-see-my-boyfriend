import Layout from "../Components/Layout/Layout";
import InnerLayout from "../Components/Layout/PageInnerLayout";
import styled from "styled-components";
import Head from "next/head";

const MeetTheArtist = styled("div")`
  margin-bottom: 30px;
`;

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>I Just Want To See My Boyfriend: About</title>
      </Head>
      <InnerLayout
        title="About"
        three={
          <div>
            <h2>I Just Want To See My Boyfriend</h2>
            <p>👽 Aliens have attacked the earth overnight. SO ANNOYING!</p>
            <p>
              🧡 Iris just wants to catch a flight from Athens to Melbourne to
              see her boyfriend and doesn't understand why everyone keeps
              talking about the stupid world events.
            </p>
            <p>
              🐰 This comic was originally written for the{" "}
              <a href="https://23hbd.com/">
                23 heures de la BD (23-Hour Comics Day)
              </a>{" "}
              challenge in 2026. The first draft, created during these 23 hours
              can be read{" "}
              <a href="https://23hbd.com/participants/2026/smar/">here</a>.
            </p>
            <h2>Smar</h2>
            <p>
              I've always been into making cute, funny things with big feelings.
            </p>
            <p>
              I made a successful queer zine series, burned out on comics as a
              job, turned to web development, and now am back to making comics
              because I want to. ❤️
            </p>
            <p>Born in 1991, I live in Athens, Greece with the best cats.</p>
            <h2>This website</h2>
            <p>
              As a comic creator I grew up on the internet during the webcomics
              era. I was super inspired by seeing artists making their own indie
              projects as they wanted while sharing their progress with the
              world in their own corners of the internet. 🥹 I'm still a
              believer in indie projects having their own decentralized space
              online, away from the noise of social media.
            </p>
            <p>
              This is my third webcomic. It's not a big project but I've really
              missed sharing comics this way, so I thought I'd do it anyway and
              see how it goes! My hope is for more free online comics that have
              a community around them in the future. 🙏
            </p>
            <p>
              This one is made in React with Next.js
              <br /> You can see the code in{" "}
              <a
                href="https://github.com/smar152/i-just-want-to-see-my-boyfriend"
                taget="_blank"
              >
                this GitHub repository
              </a>
              .
            </p>
            <h2>Obviously Outdated Meet The Artist Meme</h2>
            <MeetTheArtist>
              <img
                src="/img/MeetTheArtist.jpg"
                alt="Meet the Smar"
                width="100%"
              />
            </MeetTheArtist>
            <p>
              Updates:
              <ul>
                <li>Apocalypse gear has been retired</li>
                <li>The wallet has been stolen</li>
                <li>I have cat benefits at home</li>
                <li>I no longer use a smartphone</li>
                <li>The outfit remains unchanged</li>
              </ul>
            </p>
          </div>
        }
      />
    </Layout>
  );
};

export default AboutPage;
