import {  url,prop,} from "@rxweb/reactive-form-validators"

export class User {

	@url() 
	adminWebsiteUrl: string;

	@url({conditionalExpressions:x => x.adminWebsiteUrl == "https://google.co.in"  }) 
	customerWebsiteUrl: string;

}
