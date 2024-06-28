import {Image} from "./image";
import {Link} from "../../../shared/model/link";

export class Article {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public link: Link,
    public image: Image
  ) {}
}
