"use client";

import { useState, useEffect, useRef } from "react";
import { Progress } from "@ark-ui/react";
import { css } from "../../styled-system/css";

export const ScrollProgressbar = () => {
  const [width, setWidth] = useState(0);

  const progressref = useRef<HTMLDivElement | null>(null);

  return (
    <Progress.Root defaultValue={50}>
      <Progress.Label>Label</Progress.Label>
      <Progress.ValueText />
      <Progress.Track
        className={css({
          color: "green.400",
          bg: "gray.300",
        })}
      >
        <Progress.Range
          style={{
            backgroundColor: "green",
          }}
        />
      </Progress.Track>
    </Progress.Root>
  );
};
