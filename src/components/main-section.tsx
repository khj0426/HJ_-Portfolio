import { cva, css } from "../../styled-system/css";

const main_section = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5",
  },
  variants: {
    size: {
      md: {
        fontSize: "md",
      },
      lg: {
        fontSize: "5xl",
        color: "white",
      },
    },
  },
});
export const MainSection = () => {
  return (
    <div className={main_section({ size: "lg" })}>
      <h1>안녕하세요</h1>
      <h1>프론트엔드 개발자,</h1>
      <h1
        className={css({
          color: "green.400",
        })}
      >
        김효중입니다.
      </h1>
    </div>
  );
};
