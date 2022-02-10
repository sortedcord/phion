(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{411:function(e,t,a){"use strict";a.r(t);var i=a(56),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"package-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-structure"}},[e._v("#")]),e._v(" Package Structure")]),e._v(" "),a("p",[e._v("Phion will be using a custom extension called "),a("code",[e._v(".phkg")]),e._v(" which stores all the files necessary for your rice.\nPhion package will contain wallpapers, dot configuration folders and other notes for the user to use or scripts as well.\t\nTo see how PHION handles these packages see "),a("RouterLink",{attrs:{to:"/Packaging/Parsers.html"}},[e._v("Parsers")])],1),e._v(" "),a("p",[e._v("You can create packages either through the CLI interface or by using the GUI currently. Easiest way is to simply create a rice through PHIOS and then export it as a "),a("code",[e._v(".phkg")]),e._v(" file.")]),e._v(" "),a("p",[e._v("A Phion rice package structure will look more or less like this-")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("📦example.phkg\n ┣ 📂configs\n ┃ ┣ 📂Kitty\n ┃ ┃ ┗ 📜kitty.conf\n ┃ ┣ 📂Polybar\n ┃ ┃ ┗ 📜polybar.conf\n ┃ ┗ 📂Rofi\n ┃ ┃ ┗ 📜rofi.conf\n ┣ 📂wallpapers\n ┃ ┣ 📜dark.png\n ┃ ┣ 📜extra.png\n ┃ ┗ 📜light.png\n ┣ 📂wm\n ┃ ┣ 📂awesome\n ┃ ┃ ┗ 📜config\n ┃ ┗ 📂i3\n ┃ ┃ ┗ 📜i3.conf\n ┣ 📜config.phn\n ┗ 📜install.sh\n")])])]),a("p",[e._v("You don't necessarily need PHION to use a "),a("code",[e._v(".phkg")]),e._v(" file as its just a zip file, but it makes it easier to install, save and share your rices.")]),e._v(" "),a("p",[e._v("Below, I have explained the functionality and purpose each folder and file in detail.")]),e._v(" "),a("h2",{attrs:{id:"wallpapers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallpapers"}},[e._v("#")]),e._v(" wallpapers")]),e._v(" "),a("p",[e._v("The wallpaper folder is one the most simple to begin with. It contains the images required for the rice. A rice can have multiple wallpapers, and then it would be up to the user to decide what wallpaper they want to use.")]),e._v(" "),a("p",[e._v("When creating the package, it is advised to keep all your wallpapers at a single place. I prefer storing my rice wallpapers at "),a("code",[e._v("$HOME/Pictures")]),e._v(" folder. But you can store it almost anywhere you want.")]),e._v(" "),a("p",[e._v("This may seem unnecessary, but each wallpaper has its own class. Each wallpaper class contains")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wallpaper_name <string>\nwallpaper_location <string> # Which is set by the phkg creator.\n")])])]),a("p",[e._v("When the user installs a "),a("code",[e._v(".phkg")]),e._v(" the wallpaper files are copied over to the "),a("code",[e._v("wallpaper_location")]),e._v(". In case this location is not accessible due to permissions, the location then falls back to "),a("code",[e._v("$HOME/Pictures")]),e._v(" where you would then need to move it to the specified location. It would be better to keep the wallpapers in a generalized location.")]),e._v(" "),a("h2",{attrs:{id:"application-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-configurations"}},[e._v("#")]),e._v(" Application Configurations")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("configs")]),e._v(" folder in the package is the most important folder. Without this, you cannot call it a rice. The application configs contain folders for application dot files such as terminal configs (kitty, Alacrity, etc), Polybar, Rofi, Dunst, Picom, etc. Note that you are not supposed to store the WM configs inside this folder.")]),e._v(" "),a("p",[e._v("Each application folder can have multiple files and when installing the package, the entire application folder is moved to the specified location. It is required that the configs should be at their default locations which is generally at "),a("code",[e._v("$HOME/.config")]),e._v(".")]),e._v(" "),a("p",[e._v("Each application is also an object with the following structure-")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("application_name <string>\nconfig_folder_path <string>\nfiles_included <list>\n")])])]),a("h2",{attrs:{id:"wms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wms"}},[e._v("#")]),e._v(" WMs")]),e._v(" "),a("p",[e._v("The reason for why window manager configs are not in the application configs is simply because I prefer this type of organization. "),a("strong",[e._v("It is possible for a rice to have multiple WMs configs")]),e._v(". Honestly, why limit your setup to just a single window manager? While it is True that one is only going to use a single WM at a time, it still adds a lot of customization and flexibility. You wouldn't need to create multiple packages for the same color scheme rices just for different WMs... All of that now comes under the same package.")]),e._v(" "),a("p",[e._v("WM class structure (Similar to the previous class)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("WM_name <string>\nconfig_folder_path <string>\nfiles_included <list>\n")])])]),a("blockquote",[a("p",[a("code",[e._v("TIP:")]),e._v(" It is advisable to split your WM configs into 2 parts (I'll be giving an example for i3):- "),a("code",[e._v("styling.conf")]),e._v(" "),a("code",[e._v("i3.conf")]),e._v("\nWhile "),a("code",[e._v("i3.conf")]),e._v(" contains all of your keybinds and applications that autostart, "),a("code",[e._v("styling.conf")]),e._v(" will contain all the colors, gaps configurations, etc for the rice. (This is still optional, but it would save you a lot of time if you don't like changing your keybinds that were created by someone else)")])]),e._v(" "),a("h2",{attrs:{id:"variants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variants"}},[e._v("#")]),e._v(" Variants")]),e._v(" "),a("p",[e._v("This is quite a hard and confusing feature to explain and then implement, so I'll keep this here for later.")]),e._v(" "),a("h2",{attrs:{id:"install-sh-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-sh-optional"}},[e._v("#")]),e._v(" install.sh (Optional)")]),e._v(" "),a("p",[e._v("This may not be required by most people, but if your rice requires some other configurations than simply copy-pasting the dot files then use this inside the package. Users are required to view what the shell file does before running it for security reasons.")]),e._v(" "),a("h2",{attrs:{id:"phion-config-phn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phion-config-phn"}},[e._v("#")]),e._v(" Phion Config / "),a("code",[e._v(".phn")])]),e._v(" "),a("p",[e._v("Phion config is auto generated by PHION when packing a rice into a package. This contains instructions and metadata for the package. Basically a pickle dump. When loading a package, it is a must for it to have this file else the rice wouldn't load. More information at [[config]]")])])}),[],!1,null,null,null);t.default=s.exports}}]);