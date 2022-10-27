import { Model } from 'mongoose';
import { IEventDocument } from './event.types';

export async function isSlugTaken(
  this: Model<IEventDocument>,
  slug: string,
  excludeId: string
) {
  const event = await this.findOne({ slug, _id: { $ne: excludeId || null } });
  console.log(slug);
  return !!event;
}