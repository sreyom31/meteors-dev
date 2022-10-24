import nodemailer from 'nodemailer';
import htmlToText from 'html-to-text';
import { User } from '../shared/customTypes';

module.exports = class Email {
  from: string;
  to: string;
  name: string;

  constructor(user: User, url?: string) {
    this.to = user.email;
    this.name = user.name;
    this.from = `Sreyom Sresaan <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template: string, subject: string) {
    const html = `Hey ${this.name} ${template}`;
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendThankYouEmail() {
    await this.send('thankYou', 'Thank you for registering for the event!');
  }
};
