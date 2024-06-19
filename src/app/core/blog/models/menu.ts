import {MenuItem} from "./menu.item";

export class Menu {
  constructor(
    public id: number,
    public title: string,
    public items: MenuItem[]
  ) {}

}
