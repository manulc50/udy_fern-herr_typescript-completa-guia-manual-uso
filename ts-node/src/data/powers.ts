

// Nota: Por defecto, las exportaciones se agrupan en un objeto
// Nota: Las exportaciones por defecto no se agrupan en el objeto de exportaciones

export interface Power {
    id: number;
    desc: string;
}

const powers: Power[] =[
    {
        id: 1,
        desc: 'Money'
    },
    {
        id: 2,
        desc: 'Drugs'
    }
];

export default powers; 