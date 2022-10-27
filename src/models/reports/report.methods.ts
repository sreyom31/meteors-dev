import { IReportDocument } from './report.types';

export async function setLastUpdated(this: IReportDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}