import telegraf from 'telegraf';

const {Markup} = telegraf;

export default (i18n) => Markup.inlineKeyboard(
    [
      Markup.callbackButton(i18n.t('admin.mailing'), 'admin-mailing'),
      Markup.callbackButton(i18n.t('leave'), 'leave'),
    ],
    {columns: 1},
).extra();
