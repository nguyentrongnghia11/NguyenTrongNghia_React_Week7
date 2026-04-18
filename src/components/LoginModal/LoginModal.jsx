import LoginHeader from './LoginHeader'
import LoginContent from './LoginContent'

function LoginModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-black/40 px-4">
      <div className="w-full max-w-3xl rounded-lg bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        <LoginHeader onClose={onClose} />
        <div className="flex gap-0 md:gap-6">
          <LoginContent onClose={onClose} />
        </div>
      </div>
    </div>
  )
}

export default LoginModal
