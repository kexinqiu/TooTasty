import React from 'react'

const UserDetail = ({
                      user = {
                        '_id': '34238432784901',
                        'name': 'Alice Wonderland',
                        'firstname': 'Alice',
                        'lastname': 'Wonderland',
                        'email': 'alice@134.com',
                        'role': 'customer',
                        'bio': 'I love eatting!',
                        'location': 'Watertown',
                        'image_url': './img/top-liked-1.jpg'
                      }
                    }) => {
  return (
    <>
      <div className="flex">
        <div className="text-white user-detail height-auto mt-5">
          <h3>Username: {user.name}</h3>
          <div className="">
            <div className="">
              <span><i className="fa fa-book"/></span>
              <span> {user.bio}</span>
            </div>
            <div className="">
              <span><i className="fa fa-location-dot"/></span>
              <span> {user.location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserDetail