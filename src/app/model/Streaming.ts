export class Streaming {
headers?:Headers;
subtiles!:Subtiles[];
sources!:Sources[];
};
export class  Headers{
  referer?:string;
};
export class Subtiles{
  url!:string;
  lang?:string;
}
export class  Sources{
  url!:string;
  quality?:string;
  isM3u8?:string;
}
