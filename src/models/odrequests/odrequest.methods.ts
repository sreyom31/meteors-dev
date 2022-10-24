import { IOdrequestDocument } from './odrequest.types';

export async function setLastUpdated(this: IOdrequestDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
