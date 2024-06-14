visualize({
  auth: {
    tokenName: "myCustomTokenName",
    token: "ST-40-CZeUUnGPxEqgScNbxh9l-sso-cas.example.com"
  }
}, function (v) {
  v("#container").adhocView({
    resource: '/public/viz/Adhoc/Chart1'
  });
}, function (error) {
  console.log('Failed to auth on JRS. The error is:', error);
});
