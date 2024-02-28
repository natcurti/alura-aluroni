import menuItems from "data/menuItems.json";

export type AllMenuItems = typeof menuItems;
export type MenuItem = (typeof menuItems)[0];
