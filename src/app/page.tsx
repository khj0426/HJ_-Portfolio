import { MainSection } from "@/components/MainSection";
import { LinkArea } from "@/components/LinkArea";
import { flex } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <>
      <MainSection />
      <section
        className={flex({
          flexDir: "column",
          margin: "0 auto",
          justify: "center",
        })}
      >
        <h1
          className={css({
            fontSize: "2xl",
            color: "white",
          })}
        >
          About me
        </h1>
        <p
          className={css({
            fontSize: "14px",
            marginY: "1.5",
          })}
        >
          편안한 팀원, 항상 함께하고 싶은 동료가 되고 싶은 프론트엔드 개발자
          김효중입니다.
        </p>
        <p
          className={css({
            fontSize: "14px",
            marginY: "1.5",
          })}
        >
          배운 내용이나 여러 경험들을 정리, 공유하며 지식을 축적하며, 지속적으로
          성장하고 있습니다.
        </p>
        <p
          className={css({
            fontSize: "14px",
            marginY: "1.5",
          })}
        >
          기술을 선택할 때 “왜”라는 물음을 집요하게 파고들며 함께 성장하는
          즐거움과, 깊이 학습하는 것의 중요성을 알고 있습니다.
        </p>
        <LinkArea />
      </section>
    </>
  );
}
