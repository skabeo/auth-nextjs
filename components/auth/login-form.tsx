import { CardWrapper } from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account? Sign up"
      backButtonHref="/auth/signup"
      showSocial
    >
      Login form
    </CardWrapper>
  )
}

export default LoginForm
