Package.describe({
    name: "wieldo:simple-chat",
    version: "0.1.1",
    // Brief, one-line summary of the package.
    summary: "",
    // URL to the Git repository containing the source code for this package.
    git: "https://github.com/wieldo/simple-chat",
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: "https://github.com/wieldo/simple-chat/blob/master/README.md"
});

Package.onUse(function(api) {
    api.versionsFrom("1.4.1");
    api.use("ecmascript");
    api.mainModule("index.js");
});

Package.onTest(function(api) {
    api.use("ecmascript");
    api.use("tinytest");
    api.use("wieldo:simple-chat");
    api.mainModule("simple-chat-tests.js");
});
