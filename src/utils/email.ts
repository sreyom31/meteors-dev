import nodemailer from 'nodemailer';
import htmlToText from 'html-to-text';
import pug from 'pug';
import { Event, User } from '../shared/customTypes';

class Email {
  from: string;

  constructor() {
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
      port: 2525,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the actual email
  async send(template, options, toEmail) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(
      `${__dirname}/../views/${template}.pug`,
      options
    );

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: toEmail,
      subject: options.subject,
      html,
      text: htmlToText.fromString(html),
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendEventRegister(user: User, event: Event) {
    await this.send(
      'eventRegister',
      {
        name: user.name,
        eventName: event.slug,
        hostingClub: event.hostingClub,
      },
      user.email
    );
  }

  async sendUserRegister(user: User, event: Event, code: string) {
    await this.send(
      'userRegister',
      {
        name: user.name,
        eventName: event.slug,
        hostingClub: event.hostingClub.name,
        date: event.date,
        time: event.time,
        venue: event.venue,
        url: `https://chart.apis.google.com/chart?cht=qr&chs=256x256&chl=${code}`
      },
      user.email
    );
  }
}

export default Email;
