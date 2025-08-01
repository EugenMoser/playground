import { HttpComponent } from '@/components/http';

import SignInComponent from '../components/sign-in';

export default function Home() {
  return (
    <>
      <h1>Next Auth</h1>
      {/* <SignInComponent /> */}
      <HttpComponent />
    </>
  );
}
