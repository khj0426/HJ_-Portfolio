import { css } from "../../styled-system/css";
import Image from "next/image";
import Link from "next/link";
export const CareerCard = () => {
  const carrer = ["업사이트"];
  return (
    <div
      id="carrer"
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
        Carrer
      </h1>

      <div
        className={css({
          my: "4",
          fontSize: "md",
          fontWeight: "bold",
          color: "gray.50",
          display: "flex",
          alignItems: "center",
          gap: "4",
        })}
      >
        <Image
          src="https://cdn-upload.miniintern.com/52192/2b92ee2c-c9c1-409e-8fff-f20f4f809653/%EC%97%85%EC%82%AC%EC%9D%B4%ED%8A%B8%EA%B0%9C%EB%B0%9C.png"
          width={100}
          height={100}
          alt="업사이트 이미지"
        />

        <div>
          업사이트
          <div
            className={css({
              color: "gray.300",
              fontSize: "12px",
              fontStyle: "italic",
            })}
          >
            인턴 : 2024년 8월 ~ 2024년 11월
          </div>
        </div>
      </div>

      <h2>아래와 같은 것들을 기여했어요</h2>
      <div
        className={css({
          fontSize: "sm",
          color: "gray.100",
          my: "8",
        })}
      >
        📗 건축 소장님이 작성하는 작업일보 부분에서, 기존 코드에서는 장비들이나
        인력, 자재부분이 새로 등록될 수도 있고, 특정 장비의 수량이 바뀔 때 특정
        장비를 찾아서 수량을 바꾸는 부분이 읽기 어렵고, 복잡한 구조로 되어
        있었어요.
        <div
          className={css({
            my: "1",
          })}
        >
          react-hook-form의 useFieldArray를 사용하여, 상태를 선언적으로
          관리하도록 하였어요. append,insert,update를 적극적으로 사용하여
          동적으로 바뀌는 상태를 선언적으로 관리하고자 하였어요.
        </div>
      </div>

      <div
        className={css({
          fontSize: "sm",
          color: "gray.100",
          my: "2",
        })}
      >
        📗 디자인 시스템을 private npm으로 개발 후, 배포 및 서비스에
        적용하였어요.
        <div
          className={css({
            my: "1",
          })}
        >
          <Link
            target="_blank"
            href={
              "https://medium.com/%EC%97%85%EC%82%AC%EC%9D%B4%ED%8A%B8/%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%98-%ED%9D%AC%EB%A7%9D%EA%B3%BC-%EC%A0%88%EB%A7%9D-f9dd6b5f2fe7"
            }
            className={css({
              color: "green.200",
              fontWeight: 700,
            })}
          >
            라이브러리를 처음부터 만들고, npm에 배포하는 과정
          </Link>
          을 경험 및 학습할 수 있었어요. 또한 스토리북을 aws s3로 배포해,
          디자이너분과 끊임없이 컴포넌트에 대해 소통할 수 있었어요.
        </div>
      </div>

      <div
        className={css({
          fontSize: "sm",
          color: "gray.100",
          my: "8",
        })}
      >
        📗 비효율적인 다국어 번역 작업 DX를 개선하였어요.
        <div
          className={css({
            my: "1",
          })}
        >
          번역이 잘못되거나 누락되었을 때, 개발자가 직접 수정해야 하는 불편함
          이존재했어요.
          <span
            className={css({
              color: "green.200",
            })}
          >
            Google Spread Sheet API를 사용해 관리하도록 수정
          </span>
          하여, 번역이 잘못되었을 때, 누구나 구글 스프레드 시트를 바꾸면 다음
          배포 때 번역이 반영되도록 개선하였어요.
        </div>
      </div>
    </div>
  );
};
