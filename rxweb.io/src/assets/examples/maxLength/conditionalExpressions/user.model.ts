import {  maxLength,prop,} from "@rxweb/reactive-form-validators"

export class User {

	@maxLength({value:16 }) 
	firstName: string;

	@maxLength({value:16  ,conditionalExpressions:(x,y)=>{ return x.firstName == "John"} }) 
	lastName: string;

}
