import React from 'react'

function Form() {
  return (
    <div>
      <form action="https://formspree.io/f/mwpvaqdv" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-2 rounded text-black w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-2 rounded text-black w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 rounded text-black w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="p-2 rounded text-black w-full"
            />
          </div>
          <textarea
            name="comments"
            placeholder="Comments"
            className="w-full p-2 mt-4 rounded text-black"
          ></textarea>
          <div className="mt-4 text-right">
            <button type="submit" className="bg-white text-black px-6 py-2 rounded">Continue</button>
          </div>
        </form>
    </div>
  )
}

export default Form
