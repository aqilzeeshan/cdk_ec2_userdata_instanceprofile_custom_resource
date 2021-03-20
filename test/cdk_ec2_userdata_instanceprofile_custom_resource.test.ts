import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkEc2UserdataInstanceprofileCustomResource from '../lib/cdk_ec2_userdata_instanceprofile_custom_resource-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkEc2UserdataInstanceprofileCustomResource.CdkEc2UserdataInstanceprofileCustomResourceStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
