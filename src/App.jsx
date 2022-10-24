import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luisgbyte.png",
      name: "Luis",
      role: "Frontend Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Fala galera👋. Acabei de subir mais um projeto para meu portfólio.",
      },
      {
        type: "paragraph",
        content:
          "É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.💻",
      },
      {
        type: "link",
        content: "github.com/luisgbyte/nlw-origin",
      },
    ],
    publishedAt: new Date("2022-10-24 11:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Fala galera👋. Acabei de subir mais um projeto para meu portfólio.",
      },
      {
        type: "paragraph",
        content:
          "É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.💻",
      },
      {
        type: "link",
        content: "github.com/luisgbyte/nlw-origin",
      },
    ],
    publishedAt: new Date("2022-10-25 11:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
