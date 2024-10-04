import Image from "next/image";
import styles from "./page.module.css";
import data from "/app/data.json"
import Link from "next/link";


export default function Home() {

  return (
    <div className="container">
      <div className="mainpage-text">
        <h1>Welcome to the <span>Frontend Quiz!</span></h1>
        <p>Pick a subject to get started.</p>
      </div>

      <ul>
        {data.questionAndAnswers.map((quiz, index) =>
          <li key={index}>
            <Link className="link" href={`/${quiz.category}`}>
              <img src={quiz.icon} alt="" />
              <p>{quiz.category}</p>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
