import { Button, Flex, Image, Text, Link } from "@aws-amplify/ui-react";
import MyIcon from "@/components/elements/MyIcon"
import { useSessionContext } from "@/context/SessionContext";

export default function ProfileCard() {
  const { session } = useSessionContext();

  return (
    <Flex gap="24px" direction="column" alignItems="center" padding="24px" backgroundColor="rgba(255,255,255,1)">
      <Image
        width="160px"
        height="160px"
        display="block"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="Profile Picture"
      ></Image>

      <Flex gap="8px" direction="column" alignItems="center">
        <Text fontSize="20px" fontWeight="700" color="rgba(13,26,38,1)" textAlign="center">
          {session ? session.user?.name: "Guest"}
        </Text>
        <Text fontSize="16px" fontWeight="400" color="rgba(48,64,80,1)" textAlign="center">
          {/* {userinfo ? userinfo.signInDetails.loginId: ""} */}
          {session ? session.user?.email: "No email"}
        </Text>
      </Flex>

      <Flex gap="16px" direction="row">
        <MyIcon></MyIcon>
        <Text fontSize="16px" fontWeight="400" color="rgba(48,64,80,1)" textAlign="center">
          99 Followers
        </Text>
      </Flex>

      <Link href="/profile/edit">
        <Button size="large" variation="primary">Edit Profile</Button>
      </Link>
    </Flex>
  );
}
