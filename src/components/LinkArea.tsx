import Link from "next/link";
import { css } from "../../styled-system/css";

export const LinkArea = () => {
  return (
    <div
      id="channels"
      className={css({
        marginY: "8",
      })}
    >
      <h1
        className={css({
          fontSize: "2xl",
          color: "white",
        })}
      >
        Channels
      </h1>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-around",
          my: "1.5",
        })}
      >
        <Link
          href={"https://github.com/khj0426"}
          target="_blank"
          color="green.500"
        >
          <p
            className={css({
              color: "gray.100",
              _hover: { color: "green.200" },
            })}
          >
            깃허브
          </p>
        </Link>
        <Link href={"https://hj-devlog.vercel.app"} target="_blank">
          <p
            className={css({
              color: "gray.100",
              _hover: { color: "green.200" },
            })}
          >
            개발 블로그
          </p>
        </Link>
        <Link
          href={
            "https://beaded-menu-418.notion.site/43861c66ac2a4ab2b1dcebc7eb7395c6"
          }
          target="_blank"
        >
          <p
            className={css({
              color: "gray.100",
              _hover: { color: "green.200" },
            })}
          >
            피어/멘토 리뷰
          </p>
        </Link>
      </div>
    </div>
  );
};
