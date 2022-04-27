export interface itemType {
    title: string;
    type: string;
    weight: number;
    unit: string;
}

export interface dataType {
    title: string;
    item: Array<itemType>
}


const Data: dataType[] = [
    {
        title: 'Food',
        item: [
            {
                title: 'Bananas',
                type: 'Grocery Ape',
                weight: 2,
                unit: 'kg'
            },
            {
                title: 'Sugar',
                type: 'Candy shop',
                weight: 0.5,
                unit: 'kg'
            },
            {
                title: 'Tuna',
                type: 'Temple of the catch',
                weight: 155,
                unit: 'kg'
            },
        ]
    },
    {
        title: 'Technology',
        item: [

            {
                title: 'Polystation',
                type: 'Stairsmart',
                weight: 300,
                unit: 'Qt'
            },
        ]
    }
];

export default Data;