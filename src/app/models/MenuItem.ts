export interface MenuItem {
    title: string;
    children?: MenuItem[];
    disabled?: boolean;
}