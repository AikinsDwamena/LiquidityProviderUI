import { Currency } from "./currency.model";

export class Provider{
    constructor(public name:string, public path:string, public currencies:Currency[]){}
}