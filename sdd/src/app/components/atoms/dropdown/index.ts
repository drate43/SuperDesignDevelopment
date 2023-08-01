import { DropDown, DropDownTitle } from "./dropdown";
import { DropDownItem, IDropDownItem } from "./dropdown-item";

export const DropDownMenu = Object.assign(DropDown, {
  Title: DropDownTitle,
  Item: DropDownItem,
});

export { DropDown, DropDownTitle, DropDownItem };
export type { IDropDownItem };
