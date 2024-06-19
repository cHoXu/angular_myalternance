import {Link} from "./link";
import {Image} from "./image";

export class Article {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public link: Link,
    public image: Image
  ) {}
}
