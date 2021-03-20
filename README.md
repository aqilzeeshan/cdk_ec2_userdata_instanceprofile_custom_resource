* This is try out of https://gist.github.com/sebsto/ebb66807ac8c6f9148c7580e2da5803d
* It shows how to creation abstraction using `Resource`. Class for EC2 is created which is passed everything including userdata when instantiated from Stack. Shows how to create your own resources if CDK doesn't have it.
* Uses InstanceProfile to pass role to EC2.
* Shows how to run userdata. Installs SSM Agent and nginx then turns these services on.
