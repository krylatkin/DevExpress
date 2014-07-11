﻿(function() {
    "use strict";

    var MyApp = window.MyApp = { };

    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,

            // layoutSet: DevExpress.framework.html.layoutSets["navbar"],
            layoutSet: DevExpress.framework.html.layoutSets["slideout"],
            navigation: [
              {
                title: "Home",
                action: "#home",
                icon: "home"
              },
              {
                title: "About",
                action: "#about",
                icon: "info"
              },
              {
                title: "New Page",
                action: "#newpage",
                icon: "info"
              }
            ]
        });

        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });

})();
