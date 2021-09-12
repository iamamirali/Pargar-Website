    export interface Child2 {
        id: number;
        is_default: boolean;
        title: string;
        avatar: string;
        position: number;
        is_enable: boolean;
        is_visible: boolean;
        parent: number;
        childs: any[];
    }

    export interface Child {
        id: number;
        is_default: boolean;
        title: string;
        avatar: string;
        position: number;
        is_enable: boolean;
        is_visible: boolean;
        parent: number;
        childs: Child2[];
    }

    export interface NavChildrenRootObject {
        id: number;
        is_default: boolean;
        title: string;
        avatar: string;
        position: number;
        is_enable: boolean;
        is_visible: boolean;
        parent?: any;
        childs: Child[];
    }