function Footer() {
  return (
    <footer className="bg-[#1D2128FF] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Us */}
          <div>
            <h3 className="mb-4 font-bold">About Us</h3>
            <p className="text-sm text-[#b3b3b3]">
              Come and watch a wonderful place to explore and learn how to cook like a pro.
            </p>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="mb-4 font-bold">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  Our Codes
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  Blog Our Features
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h3 className="mb-4 font-bold">Recipes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  African Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  Western
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  Asian Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  Christmas
                </a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 font-bold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b3b3b3] transition hover:text-white">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-[#444444] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍽</span>
              <span className="font-bold">Chefify</span>
              <span className="text-[#b3b3b3]">© 2024 Chefify Company</span>
            </div>
            <div className="text-[#b3b3b3]">
              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>
              {' | '}
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
