export type State={
    noNameUsers:NoNameUser[],
    error:undefined | string
}

export type NoNameUser={
    id:number;
    name:string;
    telephone:string;
    description:string;}

export type IdNoNameUser=NoNameUser['id']
export type NoNameUserWithoutID=Omit<NoNameUser, 'id'>
