function Footer() {
  return (
    <footer className="bg-orange-50 border-t border-orange-100">

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Brand */}

          <div className="flex items-center gap-4">

            <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl">
              🍴
            </div>

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                Food<span className="text-orange-500">Hub</span>
              </h2>

              <p className="text-sm text-gray-500">
                Delicious food delivered
                <br />
                to your doorstep.
              </p>

            </div>

          </div>


          {/* Social */}

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              f
            </div>

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              ◎
            </div>

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              𝕏
            </div>

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              in
            </div>

          </div>


          {/* Copyright */}

          <p className="text-sm text-gray-600">
            © 2026 FoodHub. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;