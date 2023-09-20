export interface ICreationCardData {
  _id: string;
  imgUrlDesktop: string;
  imgUrlMobile: string;
  text: string;
}
export interface ISocialIconItem {
  _id: string;
  path: string;
  iconName: TIconType;
  ariaLabel: string;
}
export type TIconType =
  | "hamburger"
  | "close"
  | "facebook"
  | "pinterest"
  | "twitter"
  | "instagram";
