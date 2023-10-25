import Layout from "@containers/layout";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
  const {data:session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn()
    },
  })
  console.log(session);
  
  if (status === "loading") {
    return    <Layout>
    <h1> Loading This is Profile </h1>
  </Layout>
  }

  return (
    <Layout>
      <h1> {session.user.name} welcome to my website and this is your profile </h1>
    </Layout>
  );
};

export default Profile;
