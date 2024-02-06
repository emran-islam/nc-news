import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const homePage = location.pathname === "/";

  return (
    <>
      {homePage && (
        <>
          <h2>Welcome to NC-News! 🎊</h2>
          <p>
            NC-News is your go-to platform for a diverse collection of articles,
            insightful user discussions, and a vibrant community. Similar to
            Reddit, NC-News empowers you to explore, engage, and contribute to a
            wide range of topics. This app provides seamless access to articles,
            users, and comments, offering a dynamic and interactive experience.{" "}
            <br></br>
            <br></br>
            <strong>Key Features: </strong> Article Exploration: Dive into a
            curated collection of articles spanning various topics. Use the
            powerful filtering and sorting options to discover content tailored
            to your interests. Whether you're looking for the latest news or
            in-depth discussions, NC-News has you covered. <br></br>
            <br></br> <strong> User Interaction:</strong> Participate in lively
            discussions by voting on articles or comments. Share your opinions,
            insights, and knowledge with the community. Connect with like-minded
            individuals and broaden your perspectives. <br></br>
            <br></br>
            <strong> Sorting:</strong> Tailor your browsing experience with
            flexible sorting options. Arrange articles by date, title, article
            ID, author, or number of votes in ascending or descending order.
            Find the content that matters most to you. <br></br>
            <br></br>
            <strong>Voting System:</strong> Express your appreciation for
            quality content by voting on articles and comments. Your votes
            contribute to the visibility and impact of the most engaging
            discussions. <br></br>
            <br></br>
            <strong>Content Contribution: </strong> Contribute to the platform
            by posting and deleting specific articles and comments. Share your
            thoughts, ideas, and experiences, and shape the evolving narrative
            of NC-News. NC-News is more than just a platform; it's a
            community-driven space where your voice matters. Join in fostering
            meaningful conversations, exploring diverse perspectives, and
            staying informed on the topics that stays with you.
            <br></br>
            <br></br>
            <strong>
              {" "}
              Please note this app is currently under development!
            </strong>
          </p>
        </>
      )}
    </>
  );
}
