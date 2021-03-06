import { Snowflake } from 'discord.js';
import mongoose from 'mongoose';

export interface xpformat extends mongoose.Document {
  id: Snowflake,
  xp: number,
  earnedAt: number
}

const xpschema = new mongoose.Schema({
  id: String,
  xp: Number,
  earnedAt: { type: Number, default: Date.now() }
});

export const xp = mongoose.model<xpformat>("xpshit", xpschema, "xpshit");

