import React from "react";
import useStore from "@/stores";
import { useNavigate } from "react-router-dom";

export default function Router(): JSX.Element {
  const navigate = useNavigate();

  React.useEffect(() => {
    useStore.subscribe((stores) => {
      if (stores.goto) {
        navigate(stores.goto);
        stores.setGoto(undefined);
      }
    });
  });

  return <></>;
}
