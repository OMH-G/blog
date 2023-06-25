import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Body = () => {
  return (
    <section className="text-gray-600 body-font  ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          <div className="py-8 px-4 lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex items-start"
            >
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200"
                >
                  Jul
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-medium text-lg text-gray-800 title-font leading-none"
                >
                  18
                </motion.span>
              </div>
              <div className="flex-grow pl-6">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"
                >
                  CATEGORY
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="title-font text-xl font-medium text-gray-900 mb-3"
                >
                  The 400 Blows
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="leading-relaxed mb-5"
                >
                  <Link to="/post" className='text-blue-500'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</Link>
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="inline-flex items-center"
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="flex-grow flex flex-col pl-3"
                  >
                    <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex items-start"
            >
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200"
                >
                  Jul
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-medium text-lg text-gray-800 title-font leading-none"
                >
                  18
                </motion.span>
              </div>
              <div className="flex-grow pl-6">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"
                >
                  CATEGORY
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="title-font text-xl font-medium text-gray-900 mb-3"
                >
                  The 400 Blows
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="leading-relaxed mb-5"
                >
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="inline-flex items-center"
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="flex-grow flex flex-col pl-3"
                  >
                    <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="py-8 px-4 lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex items-start"
            >
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200"
                >
                  Jul
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-medium text-lg text-gray-800 title-font leading-none"
                >
                  18
                </motion.span>
              </div>
              <div className="flex-grow pl-6">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1"
                >
                  CATEGORY
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="title-font text-xl font-medium text-gray-900 mb-3"
                >
                  The 400 Blows
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="leading-relaxed mb-5"
                >
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="inline-flex items-center"
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    alt="blog"
                    src="https://dummyimage.com/103x103"
                    className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="flex-grow flex flex-col pl-3"
                  >
                    <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Body