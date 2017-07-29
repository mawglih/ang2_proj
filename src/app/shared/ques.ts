export class Questionnaire {
    name: string;
    company: string;
    email: string;
    telephone: number;
    websiteCurName: string;
    websitePurpose: string;
    elements: false;
    message: string;
}

export const Elements = [
    {name:'Slide show', val:false},
    {name:'Welcome text', val:false},
    {name:'Calendar', val:false},
    {name:'Items on-sale',val:false},
    {name:'News excerpt', val:false},
    {name:'Blog excerpt', val:false},
    {name:'Sign-in module', val:false},
    {name:'Search', val:false}
    ];