export interface Category {
    id: number;
    name: string;
    sub_categories: [
        {
            id: number;
            parent_id: number,
            name: string;
            status: number;
        },
    ];
}
