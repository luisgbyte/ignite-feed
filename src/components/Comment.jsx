import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import style from "./Comment.module.css";

export function Comment() {
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/luisgbyte.png" />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Luis</strong>
              <time title="22 de Outubro às 11:00h" dateTime="2022-10-22">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
