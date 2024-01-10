import NextAuth from 'next-auth';
import { authOptions } from './authOptionns';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
