var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

exports.sendEmail = function(to, from, subject, content) {
    var fromEmail = new helper.Email(from);
    var toEmail = new helper.Email(to);
    var content = new helper.Content(content);
    var content = new helper.Mail(fromEmail, subject, toEmail, content);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    return sg.API(request);
}