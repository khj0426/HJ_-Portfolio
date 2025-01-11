import { cva, css } from "../../styled-system/css";
import ProfileImage from "../../public/A0657048-C9C2-4E4B-9D4D-6AB73A3373C7_1_201_a.jpeg";
import Image from "next/image";
import { flex } from "../../styled-system/patterns";

const main_section = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5",
    marginTop: "4.5",
  },
  variants: {
    size: {
      sm: {
        fontSize: "sm",
      },
      md: {
        fontSize: "md",
      },
      lg: {
        fontSize: "24px",
        color: "white",
      },
    },
  },
});

const responsiveFontSize = css({
  fontSize: ["20px", "24px", "28px", "5xl", "5xl"],
});

const profileImageStyle = css({
  borderRadius: "10%",
  marginBottom: "1rem",
});

export const MainSection = () => {
  return (
    <section className="min-h-[560px]">
      <div className={main_section({ size: "lg" })}>
        <Image
          src={ProfileImage}
          width={120}
          height={120}
          placeholder="blur"
          alt="프로필 이미지"
          className={profileImageStyle}
        />
        <h1 className={responsiveFontSize}>안녕하세요</h1>
        <h1 className={responsiveFontSize}>프론트엔드 개발자</h1>
        <h1 className={`${css({ color: "green.400" })} ${responsiveFontSize}`}>
          김효중입니다.
        </h1>
      </div>
    </section>
  );
};
