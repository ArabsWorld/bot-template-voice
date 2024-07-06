//MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█
const Discord = require('discord.js');
const client = new Discord.Client({ intents: 3276799 });//a bot derver by boodyhsn .error
client.config = require('./boodyhsn/config.json');
const db = require('pro.db');//الداتا بيز مش منجو دبي

client.login(client.config.token).then(() => { console.log(`[!] — Logged in as ${client.user.tag} (${client.user.id})`); }).catch(() => { console.log('\x1b[31m[!] — Please configure a valid bot token\x1b[0m'); });

client.on('messageCreate', async (message) => {
    if (!client.config.OwnersId.includes(message.author.id)) return;
    if (!message.content.startsWith(client.config.prefix)) return;
    const cmd = message.content.slice(client.config.prefix.length).trim().split(' ')
    if (cmd.shift() == 'send')//امر ارسال اللوحه
    
{
        message.delete();
        const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: 'لوحة صوتية مؤقتة', iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription('*انقر فوق الأزرار للتحكم في اتشانل الصوتية المؤقتة*')
            .setTimestamp()
            .setColor(client.config.color)
            .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) });
        const Menu = new Discord.StringSelectMenuBuilder()
            .setCustomId('Menu')
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder('العدد المسموح بيه من المستخدمين')
            .addOptions([
                { label: '0', value: '0' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '10', value: '10' },
                { label: '15', value: '15' },
                { label: '20', value: '20' },
                { label: '25', value: '25' },
                { label: '30', value: '30' },
                { label: '35', value: '35' },
                { label: '40', value: '40' },
                { label: '45', value: '45' },
                { label: '50', value: '50' },
                { label: '55', value: '55' },
                { label: '60', value: '60' },
                { label: '65', value: '65' }
            ])
//MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█
        const RowOne = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setEmoji('1079515867374698538')
                    .setLabel('قفل')
                    .setCustomId('LockChannel'),
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setEmoji('1079515869320855624')
                    .setLabel('فتح')
                    .setCustomId('UnlockChannel'),
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setEmoji('1084858277730455683')
                    .setLabel('اخفاء')
                    .setCustomId('HideChannel'),
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setEmoji('1084859746605076480')
                    .setLabel('اظهار')
                    .setCustomId('UnhideChannel'))
        const RowTwo = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setEmoji('1079515864891674694')
                    .setLabel('كتم')
                    .setCustomId('Mute'),
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setEmoji('1079515872118444062')
                    .setLabel('فك الكتم')
                    .setCustomId('Unmute'),
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setEmoji('1084915797463404614')
                    .setLabel('تخصيص المستخدمين')
                    .setCustomId('Customize_UserLimit'),
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Danger)
                    .setEmoji('1079515860516999290')
                    .setLabel('قطع الاتصال')
                    .setCustomId('Disconnect'))
        const RowThree = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Secondary)
                    .setEmoji('1085174405895835699')
                    .setLabel('مدير المستخدمين')
                    .setCustomId('UsersManager'),
                new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Primary)
                    .setEmoji('1079515862928740363')
                    .setLabel('حذف التشانل')
                    .setCustomId('Delete_Channel'),
                    new Discord.ButtonBuilder()
                    .setStyle(Discord.ButtonStyle.Primary)
                    .setEmoji('🗒️')
                    .setLabel('إعادة تسمية')
                    .setCustomId('RenameChannel')
            )
        const RowFour = new Discord.ActionRowBuilder()
            .addComponents([Menu])
        return message.channel.send({ embeds: [embed], components: [RowOne, RowTwo, RowThree, RowFour] })
    }
})
//MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█
client.on('voiceStateUpdate', async (OldVoice, NewVoice) => {
    if (NewVoice.channelId == client.config.ChannelId) {
        await NewVoice.guild.channels.create({
            name: `⫶📢︱${NewVoice.member.user.username}`,//اسم التشانل
            type: Discord.ChannelType.GuildVoice,
            parent: client.config.CategoryId || NewVoice.member.voice.channel.parentId,
            userLimit: client.config.MaxUsers || NewVoice.member.voice.channel.userLimit
        }).then(async Channel => {
            db.set(`Temporary_${Channel.id}_${OldVoice.member.user.id}`, Channel.id);
            await NewVoice.member.voice.setChannel(Channel)
        })
    }

    setInterval(async () => {
        if (OldVoice.channelId !== null && db.has(`Temporary_${OldVoice.channelId}_${OldVoice.member.user.id}`)) {
            if (OldVoice.channel.members.filter(x => !x.user.bot).size == 0) {
                let channel = OldVoice.guild.channels.cache.get(OldVoice.channelId)
                await channel.delete();
                db.delete(`Temporary_${OldVoice.channelId}_${OldVoice.member.user.id}`);
            }
        }
    }, 1000)
})
//MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█
client.on('interactionCreate', async (interaction) => {
    if (interaction.isButton()) {
        const Channel = interaction.member.voice.channel;
        if (!Channel) {
        const embed = new Discord.EmbedBuilder()
        .setTitle('ليس في اتشانل الصوتية')
        .setDescription('> *أنت لست في التشانل الصوتية المؤقتة، يرجى إنشاء اتشانل صوتية مؤقتة مع البوت*')
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
        .setColor(client.config.color)
        .setTimestamp();
    return interaction.reply({ embeds: [embed], ephemeral: true });
        }
        const Data = db.get(`Temporary_${Channel.id}_${interaction.user.id}`);
        if (Data !== Channel.id) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('ليس انت المالك')
            .setDescription('> *أنت لا تملك التشانل الصوتية المؤقتة*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        switch (interaction.customId) {
            case 'LockChannel': {
                await interaction.deferUpdate().catch(() => {});
                interaction.member.voice.channel.permissionOverwrites.set([
                    {
                        id: interaction.guild.roles.everyone.id,
                        deny: [Discord.PermissionsBitField.Flags.Connect]
                    },
                    {
                        id: interaction.user.id,
                        allow: [Discord.PermissionsBitField.Flags.Connect]
                    }
                ])
            }
                break;
            case 'UnlockChannel': {
                await interaction.deferUpdate().catch(() => {});
                interaction.member.voice.channel.permissionOverwrites.set([
                    {
                        id: interaction.guild.roles.everyone.id,
                        allow: [Discord.PermissionsBitField.Flags.Connect]
                    }
                ])
            }
                break;
            case 'HideChannel': {
                await interaction.deferUpdate().catch(() => {});
                interaction.member.voice.channel.permissionOverwrites.set([
                    {
                        id: interaction.guild.roles.everyone.id,
                        deny: [Discord.PermissionsBitField.Flags.ViewChannel]
                    },
                    {
                        id: interaction.user.id,
                        allow: [Discord.PermissionsBitField.Flags.ViewChannel]
                    }
                ])
            }
                break;
            case 'UnhideChannel': {
                await interaction.deferUpdate().catch(() => {});
                interaction.member.voice.channel.permissionOverwrites.set([
                    {
                        id: interaction.guild.roles.everyone.id,
                        allow: [Discord.PermissionsBitField.Flags.ViewChannel]
                    }
                ])
            }
            //MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█
                break;
            case 'RenameChannel': {
                const Modal = new Discord.ModalBuilder()
                    .setCustomId('RenameModal')
                    .setTitle('Rename Channel.');
                const Name = new Discord.TextInputBuilder()
                    .setStyle(Discord.TextInputStyle.Short)
                    .setLabel('Type the new name here...')
                    .setMaxLength(50)
                    .setCustomId('Name')
                    .setRequired(true);
                const Row = new Discord.ActionRowBuilder()
                .addComponents(Name)
                Modal.addComponents(Row);
                interaction.showModal(Modal);
            }
                break;
            case 'Mute': {
                await interaction.deferUpdate().catch(() => {});
                Channel.members.forEach(async Members => {
                    const Member = interaction.guild.members.cache.get(Members.id);
                    if (Member.id !== interaction.user.id) Member.voice.setMute(true);
                })
            }
                break;
            case 'Unmute': {
                await interaction.deferUpdate().catch(() => {});
                Channel.members.forEach(async Members => {
                    const Member = interaction.guild.members.cache.get(Members.id);
                    if (Member.id !== interaction.user.id) Member.voice.setMute(false);
                })
            }
                break;
            case 'Disconnect': {
                await interaction.deferUpdate().catch(() => {});
                Channel.members.forEach(async Members => {
                    const Member = interaction.guild.members.cache.get(Members.id);
                    if (Member.id !== interaction.user.id) Member.voice.disconnect();
                })
            }
                break;
            case 'Delete_Channel': {
                await interaction.deferUpdate().catch(() => {});
                db.delete(`Temporary_${Channel.id}_${interaction.user.id}`);
                await Channel.delete();
            }
                break;
            case 'UsersManager': {
                const Row = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                        .setStyle(Discord.ButtonStyle.Secondary)
                        .setEmoji('1085177845065728062')
                        .setLabel('Mute')
                        .setCustomId('UsersManager_Mute'),
                    new Discord.ButtonBuilder()
                        .setStyle(Discord.ButtonStyle.Secondary)
                        .setEmoji('1085177849322946612')
                        .setLabel('Unmute')
                        .setCustomId('UsersManager_Unmute'),
                    new Discord.ButtonBuilder()
                        .setStyle(Discord.ButtonStyle.Secondary)
                        .setEmoji('1085177846911221770')
                        .setLabel('Deafen')
                        .setCustomId('UsersManager_Deafen'),
                    new Discord.ButtonBuilder()
                        .setStyle(Discord.ButtonStyle.Secondary)
                        .setEmoji('1085177842016452698')
                        .setLabel('Undeafen')
                        .setCustomId('UsersManager_Undeafen'));
                await interaction.reply({ components: [Row], ephemeral: true });
            }
                break;
            case 'Customize_UserLimit': {
                const Modal = new Discord.ModalBuilder()
                    .setCustomId('Customize_UsersLimit')
                    .setTitle('Customize Users Limit');
                const Number = new Discord.TextInputBuilder()
                    .setStyle(Discord.TextInputStyle.Short)
                    .setLabel('The number.')
                    .setMaxLength(2)
                    .setCustomId('The_Number')
                    .setRequired(true);
                const Row = new Discord.ActionRowBuilder().addComponents(Number)
                Modal.addComponents(Row);
                return interaction.showModal(Modal);
            }
        }
        //MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█
    } else if (interaction.isStringSelectMenu()) {
        const Channel = interaction.member.voice.channel;
        if (!Channel) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('`❌` ▸ Not in voice channel')
            .setDescription('> *You are not in the temporary voice channel, please create a temporary voice channel with the bot.*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        const Data = db.get(`Temporary_${Channel.id}_${interaction.user.id}`)
        if (Data !== Channel.id) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('ليس انت المالك')
            .setDescription('> *أنت لا تملك القناة الصوتية المؤقتة*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        if (interaction.customId == 'Menu') {
            await interaction.deferUpdate().catch(() => {});
            if (interaction.guild.channels.cache.get(Channel.id).type === Discord.ChannelType.GuildVoice) {
                interaction.guild.channels.cache.get(Channel.id).setUserLimit(interaction.values[0]);
            }
        }
    } else if (interaction.isModalSubmit()) {
        const Channel = interaction.member.voice.channel;
        if (!Channel) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('`❌` ▸ Not in voice channel')
            .setDescription('> *You are not in the temporary voice channel, please create a temporary voice channel with the bot.*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
            //MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█
        const Data = db.get(`Temporary_${Channel.id}_${interaction.user.id}`)
        if (Data !== Channel.id) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('ليس انت المالك')
            .setDescription('> *أنت لا تملك القناة الصوتية المؤقتة*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        if (interaction.customId == 'RenameModal') {
            const Name = interaction.fields.getTextInputValue('Name');
            await Channel.setName(Name)
                const embed = new Discord.EmbedBuilder()
                .setTitle('`🪄` ▸ Name changed successfully')
                .setDescription(`> *Temporary voice channel name has been successfully changed to \`${Name}\`.*`)
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
                .setColor(client.config.color)
                .setTimestamp();
            return interaction.reply({ embeds: [embed], ephemeral: true });
        } else if (interaction.customId == 'Customize_UsersLimit') {
            const Number = interaction.fields.getTextInputValue('The_Number');
            if (Channel.userLimit == Number) {
                const embed = new Discord.EmbedBuilder()
                .setTitle('`❌` ▸ User limit already')
                .setDescription(`> *The user limit for the temporary voice channel is already \`${Number}\`.*`)
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
                .setColor(client.config.color)
                .setTimestamp();
            return interaction.reply({ embeds: [embed], ephemeral: true });
                }
                await Channel.setUserLimit(Number);
                const embed = new Discord.EmbedBuilder()
                .setTitle('`🪄` ▸ User limit changed successfully')
                .setDescription(`> *Temporary voice channel user limit has been successfully changed to \`${Number}\`.*`)
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
                .setColor(client.config.color)
                .setTimestamp();
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }
    }
})

/* Users Manager */

client.on('interactionCreate', async interaction => {
    if (interaction.isButton()) {
        const Channel = interaction.member.voice.channel;
        if (!Channel) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('`❌` ▸ Not in voice channel')
            .setDescription('> *You are not in the temporary voice channel, please create a temporary voice channel with the bot.*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        const Data = db.get(`Temporary_${Channel.id}_${interaction.user.id}`)
        if (Data !== Channel.id) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('ليس انت المالك')
            .setDescription('> *أنت لا تملك القناة الصوتية المؤقتة*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        switch (interaction.customId) {
            case 'UsersManager_Mute': {
                const Row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.UserSelectMenuBuilder()
                            .setPlaceholder('Select the user from the select menu.')
                            .setCustomId('UserManager_Mute')
                            .setMaxValues(1)
                    );
                await interaction.reply({ components: [Row], ephemeral: true });
            }
                break;
            case 'UsersManager_Unmute': {
                const Row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.UserSelectMenuBuilder()
                            .setPlaceholder('Select the user from the select menu.')
                            .setCustomId('UserManager_Unmute')
                            .setMaxValues(1))
                await interaction.reply({ components: [Row], ephemeral: true });
            }
                break;
            case 'UsersManager_Deafen': {
                const Row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.UserSelectMenuBuilder()
                            .setPlaceholder('Select the user from the select menu.')
                            .setCustomId('UserManager_Deafen')
                            .setMaxValues(1)
                    )
                await interaction.reply({ components: [Row], ephemeral: true });
            }
                break;
            case 'UsersManager_Undeafen': {
                const Row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.UserSelectMenuBuilder()
                            .setPlaceholder('Select the user from the select menu.')
                            .setCustomId('UserManager_Undeafen')
                            .setMaxValues(1)
                    )
                await interaction.reply({ components: [Row], ephemeral: true });
            }
        }
        //MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█
    } else if (interaction.isUserSelectMenu()) {
        const Channel = interaction.member.voice.channel;
        if (!Channel) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('`❌` ▸ Not in voice channel')
            .setDescription('> *You are not in the temporary voice channel, please create a temporary voice channel with the bot.*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        const Data = db.get(`Temporary_${Channel.id}_${interaction.user.id}`);
        if (Data !== Channel.id) {
            const embed = new Discord.EmbedBuilder()
            .setTitle('ليس انت المالك')
            .setDescription('> *أنت لا تملك القناة الصوتية المؤقتة*')
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
            .setColor(client.config.color)
            .setTimestamp();
        return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        switch (interaction.customId) {
            case 'UserManager_Mute': {
                await interaction.deferUpdate().catch(() => {});
                interaction.member.voice.channel.members.filter((Member) => Member.user.id == interaction.values[0]).forEach((User) => {
                    const Member = interaction.guild.members.cache.get(User.id);
                    Member.voice.setMute(true);
                })
            }
                break;
            case 'UserManager_Unmute': {
                await interaction.deferUpdate().catch(() => {})
                interaction.member.voice.channel.members.filter((Member) => Member.user.id == interaction.values[0]).forEach((User) => {
                    const Member = interaction.guild.members.cache.get(User.id);
                    Member.voice.setMute(false);
                })
            }
                break;
            case 'UserManager_Deafen': {
                await interaction.deferUpdate().catch(() => {})
                interaction.member.voice.channel.members.filter((Member) => Member.user.id == interaction.values[0]).forEach((User) => {
                    const Member = interaction.guild.members.cache.get(User.id);
                    Member.voice.setDeaf(true);
                })
            }
                break;
            case 'UserManager_Undeafen': {
                await interaction.deferUpdate().catch(() => {})
                interaction.member.voice.channel.members.filter((Member) => Member.user.id == interaction.values[0]).forEach((User) => {
                    const Member = interaction.guild.members.cache.get(User.id);
                    Member.voice.setDeaf(false);
                })
            }
        }
    }
})

process.on('uncaughtException', () => { return })
process.on('uncaughtExceptionMonitor', () => { return })
process.on('unhandledRejection', () => { return })
//MASTER:
//▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄  ▄▄   ▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄    ▄
//█  ▄    █       █       █      ██  █ █  █  █ █  █       █  █  █ █
//█ █▄█   █   ▄   █   ▄   █  ▄    █  █▄█  █  █▄█  █  ▄▄▄▄▄█   █▄█ █
//█       █  █ █  █  █ █  █ █ █   █       █       █ █▄▄▄▄▄█       █
//█  ▄   ██  █▄█  █  █▄█  █ █▄█   █▄     ▄█   ▄   █▄▄▄▄▄  █  ▄    █
//█ █▄█   █       █       █       █ █   █ █  █ █  █▄▄▄▄▄█ █ █ █   █
//█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄█  █▄▄▄█ █▄▄█ █▄▄█▄▄▄▄▄▄▄█▄█  █▄▄█