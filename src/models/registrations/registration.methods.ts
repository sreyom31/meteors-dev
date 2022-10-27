import { IRegistrationDocument } from './registration.types';

export async function setLastUpdated(this: IRegistrationDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}