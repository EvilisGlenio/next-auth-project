
import SignInButton from "../components/SignInButton"

const SignInPage = () => {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="mb-10">Clique para efetuar login</p>
        <SignInButton />
    </div>
  )
}

export default SignInPage