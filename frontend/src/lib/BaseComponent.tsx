import React from "react";
import { Navigate } from "react-router-dom";
import autobind from "autobind-decorator";
import useStore from "@/stores";

export default class BaseComponent extends React.Component<any> {
  public state: any = {};
  private unsub: any;
  protected stores = useStore.getState();

  @autobind
  protected goto(path: string) {
    this.stores.setGoto(path);
  }

  public componentDidMount() {
    this.unsub = useStore.subscribe((stores) => {
      this.stores = stores;
    });
  }

  public componentWillUnmount() {
    this.unsub();
  }
}
