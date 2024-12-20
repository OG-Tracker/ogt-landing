export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gradient-to-t shadow-[0_0px_7px_4px_rgba(0,0,0,0.4)]  from-transparent to-kog-100 rounded py-10 px-8 md:py-16 md:px-12  overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="0" stdDeviation="0" flood-opacity="0.2" />
                  </filter>
                  <filter id="shadow2">
                    <feDropShadow dx="0" dy="0" stdDeviation="0" flood-opacity="0.1" flood-color="#000" />
                  </filter>
                  <filter id="shadow3">
                    <feDropShadow
                      dx="-0.8"
                      dy="-0.8"
                      stdDeviation="0"
                      flood-color="#000"
                      flood-opacity="0.2" />
                  </filter>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#8D0D62" offset="1%" />
                    <stop stopColor="#481A5A" offset="44.317%" />
                    <stop stopColor="#62033C" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd" filter='url(#shadow)'>
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576"  />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" filter='url(#shadow2)' />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center w-full text-center ">

              {/* CTA content */}
              <div className="text-center lg:text-left w-full">
                <h3 className="h3 text-white mb-2 text-center">Track Deliverables</h3>
                {/* <p className="text-gray-300 text-lg mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p> */}

                {/* CTA form */}

                <div className="flex flex-col sm:flex-row justify-center  mx-auto w-full text-center center lg:mx-0">
                  {/* <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" /> */}
                  <a className="btn text-white bg-kog-100 hover:bg-transparent shadow-[0px_0px_10px_4px_rgba(254,0,188,0.2)] hover:shadow-[inset_0px_1px_10px_rgba(0,0,0,1)] hover:border-kog-100 rounded-full border border-kog-900" href="#0">Launch App</a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}