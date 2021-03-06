const { Command } = require('discord-akairo');
const PaginationEmbed = require('discord-paginationembed').FieldsEmbed;

const { loading } = require('../../auth').emojis;

class GuideCommand extends Command {
  constructor() {
    super('guide', {
      aliases: ['guide'],
      description: {
        content: 'Displays an introduction to the game and the bot commands.',
        usage: '<page number>',
        examples: ['', '13', '37']
      },
      clientPermissions: ['ADD_REACTIONS', 'MANAGE_MESSAGES', 'EMBED_LINKS'],
      args: [
        {
          id: 'page',
          type: 'integer',
          default: 1
        }
      ]
    });
    this.paginated = true;
    this.dialogs = [
      [
        'Are you familiar with the game? No? These links can help you... but maybe for the last section...',
        '\n❯ Kamihime Project Wiki',
        '\t[DMM Wiki](https://goo.gl/xPVW9t) | [Nutaku Wiki](http://kamihime-project.wikia.com/wiki/Kamihime_Project_Wikia)',
        '\n❯ Kamihime Project Forums',
        '\t[Kamihime Project - Harem Time Forums](http://harem-battle.club/kamihime-project/)',
        '\n❯ Helpful Documentations',
        '\tSanahtlig: [Toolbox](https://goo.gl/bP43qi) | [Game Guide](https://goo.gl/YMcg1h) | [Re-rolling: How to get FREE SSR Kamihime](https://goo.gl/eJffLx)',
        '\tJ-Star: [Weapon Skill Upgrading Guide](https://goo.gl/gGwvUX)',
        '\n❯ Harem Scenes',
        '\tEliont: [Kamihime Player](https://goo.gl/XjWD93)',
        '\tEuni: [Kamihime Web Player](http://kamihimedb.thegzm.space)'
      ].join('\n'),
      [
        'As you can also see them from `@Eros help`, here are the following basic commands:',
        '\t`info` (page 3) - Retrieves a character/weapon\'s information from Nutaku Wikia.',
        '\t`hareminfo` (page 4) - Retrieves harem episodes for a character from Kamihime DB.',
        '\t`list` (page 5) - Displays a list of characters available from Kamihime DB only.',
        '❯ Proceed to the next page if you want to see a better explanation on each command.',
        '\nMiscellaneous Commands',
        '\t`search` - Searches character(s)/weapon(s) matching your input.',
        '\t`leaderboard` - 4tehlulz. See how many perverts are peeking at each character.',
        '\t`nsfw` - Grants you access to NSFW channel set by the guild owner, if there is one.'
      ].join('\n'),
      [
        '❯ info',
        'Usage: `@Eros info <character/weapon name>`',
        'Shortcuts for this command: `i`, `khi`, `kh`',
        '\nMin. requirement for input length is 2.',
        'If there are multiple results, you will be prompted to select what you exactly you would like to see.',
        '\nSee more from this command: `@Eros help info`'
      ].join('\n'),
      [
        '❯ hareminfo',
        'Usage: `@Eros hareminfo <character name>`',
        'Shortcuts for this command: `hinfo`, `hi`, `peek`, `p`',
        '\nMin. requirement for input length is 2.',
        'If there are multiple result, you will be prompted to select what you exactly you would like to see.',
        '\n❯ Using This Command Normally',
        '\t`@Eros nsfwchannel` must be set or I will decline your request.',
        '\t`@Eros nsfwrole` must be set if you would like me to assign NSFW role to gain access to the NSFW channel.',
        '\t`@Eros loli` is optional if you hate embedding loli contents from the game. Toggle-able command.',
        '\t`@Eros nsfw` to request access to NSFW Channel and I will assign a role to you. This is only available if the `nsfwrole` is set.',
        '\nSee more from this command: `@Eros help hareminfo`'
      ].join('\n'),
      [
        '❯ list',
        'Usage: `@Eros list <filter variable(s)>`',
        'Shortcut for this command: `l`',
        '\nRequired variables can be seen via `@Eros list variables`.',
        'Variables can be combined, but variables will always start with the following:',
        '\t`kamihime`, `eidolon`, `soul`',
        '\n❯ Example',
        '\t`@Eros filter kamihime ssr fire`',
        '\nSee more from this command: `@Eros help list`'
      ].join('\n')
    ];
    this.finalDialogLength = this.dialogs.length + 1;
  }

  async exec(message, { page }) {
    if (this.dialogs.length < this.finalDialogLength)
      this.dialogs.push(`That's all for now. Anything missing? Contact: ${this.client.users.get(this.client.ownerID)}`);

    try {
      const embed = new PaginationEmbed()
        .setAuthorizedUser(message.author)
        .setChannel(message.channel)
        .setClientMessage(null, `${loading} Preparing...`)
        .setArray(this.dialogs)
        .setElementsPerPage(1)
        .setPage(page)
        .setColor(0xFF00AE)
        .addField('Help', 'React with the emoji below to navigate. ↗ to skip a page.')
        .formatField('Guide', i => i, false)
        .setTimeout(240 * 1000);

      return await embed.build();
    } catch (err) {
      message.reply(`I cannot complete the query because:\`\`\`x1\n${err}\`\`\``);
    }
  }
}

module.exports = GuideCommand;
