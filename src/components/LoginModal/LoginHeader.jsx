function LoginHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between border-b border-[#ececec] px-6 py-4">
      <h2 className="text-2xl font-bold text-[#333333]">Login</h2>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close login modal"
        className="text-2xl leading-none text-[#8f8f8f] transition hover:text-[#5f5f5f]"
      >
        ×
      </button>
    </div>
  )
}

export default LoginHeader
