import { Tabs as ArkUiTabs } from "@ark-ui/react";
import { sva } from "../../styled-system/css";

const tabsRecipe = sva({
  slots: ["root", "trigger", "content", "list"],
  base: {
    root: {
      margin: "5px auto",
      width: ["100%", "80%"],
      bg: "gray.50",
      shadow: "sm",
      rounded: "md",
    },
    trigger: {
      minW: "20",
      py: "2",
      px: "4",
      rounded: "md",
      cursor: "pointer",
      _selected: {
        fontWeight: "medium",
        bg: "gray.200",
        color: "green.800",
      },
    },
    content: {
      pb: "4",
      pt: "3",
      px: "4",
    },
    list: {
      px: "3",
      py: "2",
    },
  },
});

export const Tabs = () => {
  const classes = tabsRecipe();
  return (
    <ArkUiTabs.Root className={classes.root} defaultValue={"Carrer"}>
      <ArkUiTabs.List className={classes.list}>
        <ArkUiTabs.Trigger className={classes.trigger} value="Carrer">
          Carrer
        </ArkUiTabs.Trigger>
        <ArkUiTabs.Trigger className={classes.trigger} value="Project">
          Project
        </ArkUiTabs.Trigger>
        <ArkUiTabs.Trigger className={classes.trigger} value="Edu">
          Edu
        </ArkUiTabs.Trigger>
      </ArkUiTabs.List>
      <ArkUiTabs.Content className={classes.content} value="Carrer">
        Carrer
      </ArkUiTabs.Content>
      <ArkUiTabs.Content className={classes.content} value="Project">
        Casdasdasdasd
      </ArkUiTabs.Content>
      <ArkUiTabs.Content className={classes.content} value="Edu">
        Casdasdasdasd
      </ArkUiTabs.Content>
    </ArkUiTabs.Root>
  );
};
