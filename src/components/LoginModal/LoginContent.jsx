import { useState } from 'react'
import loginImg from '../../assets/login.png'

function LoginContent({ onClose }) {
  const [email, setEmail] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login with:', email)
  }

  return (
    <div className="flex min-h-[420px] w-full">
      <div className="hidden w-2/5 overflow-hidden rounded-l-lg bg-gradient-to-br from-[#a8d5e2] to-[#7ec8d9] md:flex md:items-center md:justify-center">
        <div className="relative h-full w-full">
          <img
            src={loginImg}
            alt="Cooking dish"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent">
            <p className="max-w-xs text-center text-lg font-semibold text-white">
              "Embrace the art of cooking, where flavors come alive"
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full flex-col justify-center px-6 py-8 md:w-3/5 md:px-8">
        <p className="text-sm text-[#666666]">Login</p>
        <p className="text-sm text-[#666666]">Enter your email to log in.</p>

        <form onSubmit={handleContinue} className="mt-5 flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="rounded border border-[#dcdcdc] bg-white px-4 py-2.5 text-sm text-[#333333] placeholder-[#a3a3a3] transition focus:border-[#E04071] focus:outline-none"
            required
          />

          <button
            type="submit"
            className="rounded-full bg-[#E04071] py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 border-t border-[#dcdcdc]" />
          <span className="text-xs text-[#a3a3a3]">or</span>
          <div className="flex-1 border-t border-[#dcdcdc]" />
        </div>

                {/* Footer text */}
                <p className="mt-5 text-center text-xs text-[#999999]">
          By continuing, you agree to the updated Terms of Service, and{' '}
          <span className="text-[#E04071] hover:underline">Privacy Policy</span>
        </p>

        {/* Social login buttons */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded border border-[#dcdcdc] bg-white px-4 py-2.5 text-sm font-medium text-[#333333] transition hover:bg-[#f9f9f9]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded border border-[#dcdcdc] bg-white px-4 py-2.5 text-sm font-medium text-[#333333] transition hover:bg-[#f9f9f9]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded border border-[#dcdcdc] bg-white px-4 py-2.5 text-sm font-medium text-[#333333] transition hover:bg-[#f9f9f9]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 13.5c-.91 0-1.82-.33-2.5-.92.92-.69 1.5-1.78 1.5-3.08 0-2.05-1.67-3.71-3.71-3.71-1.3 0-2.39.58-3.08 1.5-.59-.68-1.42-1.5-2.5-1.5-2.05 0-3.71 1.66-3.71 3.71 0 1.3.58 2.39 1.5 3.08-.68.59-1.59.92-2.5.92-2.05 0-3.71 1.66-3.71 3.71 0 2.05 1.66 3.71 3.71 3.71 1.3 0 2.39-.58 3.08-1.5.69.92 1.78 1.5 3.08 1.5 2.05 0 3.71-1.66 3.71-3.71 0-1.3-.58-2.39-1.5-3.08.68-.59 1.59-.92 2.5-.92z"/>
            </svg>
            Continue with Apple
          </button>
        </div>


      </div>
    </div>
  )
}

export default LoginContent
