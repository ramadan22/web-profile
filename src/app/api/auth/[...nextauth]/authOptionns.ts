/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserService } from '@/services/authentication';
import { getProfile } from '@/services/users/profile';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const resultAuth = await UserService.authenticate({
            email: credentials?.email || '',
            password: credentials?.password || '',
          });

          if (resultAuth?.status !== 200) {
            throw new Error(resultAuth?.data?.message || 'Something wrong!');
          }

          const geProfile = await getProfile(resultAuth?.data?.token || '');

          return {
            id: geProfile.data?.id_user || '',
            email: geProfile.data?.email,
            name: `${geProfile.data?.first_name} ${geProfile.data?.last_name}`,
            detail: geProfile.data,
            token: resultAuth?.data?.token,
          };
        } catch (error: any) {
          throw new Error(error?.message);
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async session(_payload: any) {
      // console.log(_payload);
      const { session, token } = _payload;
      session.user = token.user;
      return session;
    },
    async jwt(_payload: any) {
      const {
        token,
        account,
        user,
        // session,
        // trigger,
      } = _payload;

      // console.log('token', token);
      // console.log('account', account);
      // console.log('user', user);
      // console.log('session', session);
      // console.log('trigger', trigger);

      if (account) {
        token.user = { ...user };
      }

      // else if (trigger === 'update') {
      //   token.user = {
      //     ...session,
      //   };
      // }

      return token;
    },
    async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },
  },
};
