import React from 'react';
import { MdHome, MdNotificationsNone, MdBookmarkBorder, MdMailOutline, MdSubject, MdMoreHoriz, MdPerson } from "react-icons/md";
import { FaHashtag } from 'react-icons/fa';

import './FirstColumn.css';

export default function FirstColumn() {
  return (
    <div className="flex firstColumn">
      <div className="flex navigation">
        <img className="icon" src={require('../../../src/images/icon.jpg')} alt="Twitter Icon" style={{ marginBottom: 10 }} />
        <div className="flexRow">
          <MdHome style={{ width: 25, height: 25, color: 'rgb(29,161,242)' }} />
          <p className="navigationText" style={{ color: 'rgb(29,161,242)' }}>Home</p>
        </div>
        <div className="flexRow">
          <FaHashtag style={{ width: 25, height: 25 }} />
          <p className="navigationText" >Explore</p>
        </div>
        <div className="flexRow">
          <MdNotificationsNone style={{ width: 25, height: 25 }} />
          <p className="navigationText" >Notifications</p>
        </div>
        <div className="flexRow">
          <MdMailOutline style={{ width: 25, height: 25 }} />
          <p className="navigationText" >Messages</p>
        </div>
        <div className="flexRow">
          <MdBookmarkBorder style={{ width: 25, height: 25 }} />
          <p className="navigationText" >Bookmarks</p>
        </div>
        <div className="flexRow">
          <MdSubject style={{ width: 25, height: 25 }} />
          <p className="navigationText" >Lists</p>
        </div>
        <div className="flexRow">
          <MdPerson style={{ width: 25, height: 25 }} />
          <p className="navigationText" >Profile</p>
        </div>
        <div className="flexRow">
          <MdMoreHoriz style={{ width: 25, height: 25 }} />
          <p className="navigationText" >More</p>
        </div>

        <button type="button" className="tweetButton">
          Tweet
        </button>
      </div>
    </div>
  );
}
