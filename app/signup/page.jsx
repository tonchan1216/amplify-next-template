
import RegistrationForm from "./registrationForm"

export default function SignupPage() {
  return (
    <div style={{
      overflow:"hidden",
      backgroundColor:"rgba(255,255,255,1)",
      padding:"25px 30px"}}
    >
      <RegistrationForm
        display="flex"
        gap="10px"
        direction="column"
        width="1440px"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="160px 160px 160px 160px"
        backgroundColor="rgba(255,255,255,1)"
      ></RegistrationForm>
  </div>
);
}
