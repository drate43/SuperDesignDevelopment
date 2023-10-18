import { DropDown } from "./dropdown";
import { DropDownItem, IDropDownItem } from "./dropdown-item";

export const DropDownMenu = Object.assign(DropDown, {
  Item: DropDownItem,
});

export type { IDropDownItem };
export { DropDown, DropDownItem };
