import React from 'react'

const Forms = (props) => {
  return (
    <ul>
      <li className="half">
        <input type="text" name="name" placeholder="Name" required />
      </li>
      <li className="half">
        <input type="email" name="email" placeholder="Email" required />
      </li>
      <li>
        <input placeholder="Subject" type="text" name="subject" required />
      </li>
      <li>
        <textarea placeholder="Message" name="message" required></textarea>
      </li>
      <li>
        <input type="submit" className="flat-button" value="SEND" />
      </li>
    </ul>
  )
}

export default Forms
