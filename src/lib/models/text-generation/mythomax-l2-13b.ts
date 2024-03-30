import {TextGenerationBaseModel} from '@/lib/models/base';


export class MythoMaxL2_13B extends TextGenerationBaseModel {
  public static readonly endpoint: string = 'https://api.deepinfra.com/v1/inference/Gryphe/MythoMax-L2-13b';

  constructor(authToken: string) {
    super(MythoMaxL2_13B.endpoint, authToken);
  }
}
