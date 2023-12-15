

export type State={
    doctors:Doctor[],
    error:undefined | string
}

export type Doctor={
    id:number;
    firstName:string;
    secondName:string;
    patronymic:string;
    img:string;
    description:string;
    slot:number;
    specialization?:string;
}

export type IdDoctor=Doctor['id']
