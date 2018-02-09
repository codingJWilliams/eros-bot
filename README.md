# Eros Bot Rewrite
  * Built with [**Discord.JS-Akairo Framework** (**Master**)](https://github.com/1computer1/discord-akairo)
    * Please read its documentation [**here**](https://1computer1.github.io/discord-akairo/master).
  * Version: [**AkairoClass**] **1.1**

> Eros is now rewritten with a new framework, which has a nice documentation, instead of my own framework, which is not well-documented and it'll be hard for any `to be developer/s` of this bot if I have to insist with the private framework.

## Features
  * Realtime Character/Weapon/Accessory information pulls from [**Kamihime Project Nutaku Wikia**](https://kamihime-project.wikia.com)
  * Kamihime Database (Harem Scenes)
    * Again, only Nutaku version. Absolutely ***no*** DMM version. You may checkout my forum thread for some.
    * Uses RESTful API from [**Kamihime Database**](https://bitbucket.org/gazmull/kamihime-database/src/f91ab99a12502743044850573c5d672a95ae5e35)
  * Basic bot commands - See `help` command for more info on each command
  * Guild-wide Customisable Prefix
    * Default Prefix: **?** or **`@Eros` (Mention)**
  * You can now DM the bot directly for commands without the prefix unlike [**ErosClass**] Version
  * *More to come�*

## Commands
  * **Admin/Server Manager**
    * Main: `prefix`
    * Kamihime-specific: `loli`, `nsfwchannel`, `nsfwrole`
  * **General**
    * Main: `invite`
  * **Utility**
    * Main: `memberinfo`, `serverinfo`, `ping`
    * Bot Owner: `eval`
  * **Kamihime**
    * Main: `nsfw`, `hinfo`, `info`, `list`
    * Bot Owner: `add`, `delete`, `update`, `approve`

## Hosting Eros
> ### [Add her to your server instead? (24/7)](http://addbot.thegzm.space)

  * Create a [**Bot Account**](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
  * Eros requires [**Node 8**](https://nodejs.org) for runtime
    * Clone this repository [via command shell] after installing Node: `git clone https://gazmull@bitbucket.org/gazmull/eros-public.git`
    * Execute `npm install` (Before this, make sure you have [**Build Tools** (**Windows**)](https://github.com/felixrieseberg/windows-build-tools) | [**Build Tools** (**Linux**)](https://superuser.com/questions/352000/whats-a-good-way-to-install-build-essentials-all-common-useful-commands-on))
    * Check `infobox-parser` in `node_modules`. If `index.js` is missing, then NPM failed to obtain the files; so
        * Delete `infobox-parser` folder then:
          * `git clone https://github.com/dijs/infobox-parser.git`
          * `cd infobox-parser`
          * `npm install`
          * `npm run build`
  * Create an `auth.js` file and obtain the template from `auth.example.js`. They are documented by `//comments` to help you set up the file
  * Run the bot!
    * Node: `node .`
      * Process Managers
        * [**Nodemon**](https://github.com/remy/nodemon): `nodemon`
        * [**PM2**](https://github.com/Unitech/pm2): `pm2 start index.js --name="Eros"` 

> ### Let me know if there's still missing.

