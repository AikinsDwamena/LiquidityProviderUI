export class PurchaseRequest{
    constructor(public providerName:string
        ,public currency:string 
        ,public amountBeingPurchased:number
        ,public status:string
        ,public bankAccountNo:string ,public requestTime:Date){}

     // providerName,
    // currency,
      // amountBeingPurchased, 
      //  requestTime, 
      //  status,
      //  bankAccountNo

}