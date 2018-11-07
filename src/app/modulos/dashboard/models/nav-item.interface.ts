export interface NavItemInterface {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  description?: string;
  children?: NavItemInterface[];
}
