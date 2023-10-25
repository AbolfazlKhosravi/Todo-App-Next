import Layout from "@containers/layout";
import { getSession, useSession } from "next-auth/react";

const ProtectSSR = () => {
  const { data: session, status } = useSession();
  return (
    <Layout>
      <div>{session.user.name} welcome to portect SSR </div>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=http://localhost:3000/protect-ssr",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

export default ProtectSSR;
