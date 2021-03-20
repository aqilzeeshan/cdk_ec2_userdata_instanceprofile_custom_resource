#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEc2UserdataInstanceprofileCustomResourceStack } from '../lib/cdk_ec2_userdata_instanceprofile_custom_resource-stack';

const app = new cdk.App();
new CdkEc2UserdataInstanceprofileCustomResourceStack(app, 'CdkEc2UserdataInstanceprofileCustomResourceStack');
