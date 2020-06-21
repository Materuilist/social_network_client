import React from "react";
import { withDropdown } from "../../shared/withDropdown";

export const ProfileDropdown = withDropdown(() => <div>Man</div>, [
  { item: "Профиль", clickHandler: () => {} },
  { item: "Выйти", clickHandler: () => {} },
]);
