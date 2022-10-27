import { IEventDocument } from './event.types';

export async function setLastUpdated(this: IEventDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
