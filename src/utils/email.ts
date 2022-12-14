import nodemailer from 'nodemailer';
import htmlToText from 'html-to-text';
import pug from 'pug';
import { Event, User } from '../shared/customTypes';
import config from '../config';

class Email {
  from: string;

  constructor() {
    this.from = `Sreyom Sresaan <${config.email.dev_from}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: config.email.prod_username,
          pass: config.email.prod_password,
        },
      });
    }

    return nodemailer.createTransport({
      host: config.email.dev_host,
      port: config.email.dev_port,
      auth: {
        user: config.email.dev_username,
        pass: config.email.dev_password,
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
        hostingClub: event.hostingClub.name,
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
        url: `https://chart.apis.google.com/chart?cht=qr&chs=256x256&chl=${code}`,
      },
      user.email
    );
  }
}

export default Email;
