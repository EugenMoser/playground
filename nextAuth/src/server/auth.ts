import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

import { db } from '@/server/database/schema';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import {
  accounts,
  users,
  verificationTokens,
} from './database/schema';

export const {} = NextAuth({
  adapter: DrizzleAdapter(db, {
    verificationTokensTable: verificationTokens,
    usersTable: users,
    accountsTable: accounts,
  }),
  providers: [GitHub],
});
