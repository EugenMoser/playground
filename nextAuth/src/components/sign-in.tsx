import { signIn } from '@/server/auth';

interface SignInComponentProps {}

export default function SignInComponent({}: SignInComponentProps): React.JSX.Element {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn();
      }}
    >
      <input
        type="text"
        name="email"
        placeholder="Email"
      />
      <button type="submit">Signin with Magic Link</button>
    </form>
  );
}
