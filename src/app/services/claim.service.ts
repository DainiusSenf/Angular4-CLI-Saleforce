import { Injectable } from '@angular/core';
import { SalesforceService} from "./salesforce.service";

@Injectable()
export class ClaimService {

  constructor(private sfdc: SalesforceService) {}

  public getClaimsByUserId(userId): Promise<any> {
    return this.sfdc.execute('getUserClaimsByClient', {accId: userId})
      .then((res) => {
        return res;
      }, (err) => {
      });
  }
}
