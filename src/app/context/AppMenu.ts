import { MenuItem } from "../models";
import { Children } from "react";

export function GetMenu(): MenuItem[] {
    const appMenu: MenuItem[] = [
        { title: 'Option 1' },
        { 
            title: 'Option with menu',
            children: [
                {
                    title: "SubOption1"
                }
            ]
        },
        { 
            title: 'Option with menu 2',
            children: [
                {
                    title: "SubOption3",
                    children: [
                        { title: 'Test'}
                    ]
                }
            ]
        },
        { title: 'Option disabled', disabled: true }
    ];

    return appMenu;
}