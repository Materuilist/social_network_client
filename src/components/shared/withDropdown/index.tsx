import React from "react";

export interface IDropdownItem {
  item: string;
  clickHandler: (event: any) => any;
}

export const withDropdown = (
  TitleComponent: ()=>JSX.Element,
  DropdownList: IDropdownItem[]
) => () => {
    return (<div>Dropdown</div>)
};
