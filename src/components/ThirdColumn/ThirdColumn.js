import React from 'react';
import { MdSearch } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';

import './ThirdColumn.css';

export default function ThirdColumn() {
  return (
    <div className="flex thirdColumn">
      <div className="flex navigation">

        <div className="flex searchBox">
          <MdSearch className="icon" />
          <p className="searchTwitter">Search Twitter</p>
        </div>

        <div className="trends" style={{ marginTop: 10, backgroundColor: 'rgb(230, 236, 240)', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <div className="trendItem" style={{ display: 'flex', flexDirection: 'row', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} >
            <p style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, fontSize: 18 }}>Trends for you</p>
            <IoIosSettings style={{ marginLeft: 150, width: 20, height: 20, marginTop: 7, color: 'rgb(29,161,242)' }} />
          </div>
        </div>
        <div className="trends" style={{ backgroundColor: 'rgb(230, 236, 240)', }}>
          <div className="trendItem">
            <p style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, fontSize: 14 }}>#ReactJS</p>
          </div>
        </div>
        <div className="trends" style={{ backgroundColor: 'rgb(230, 236, 240)', }}>
          <div className="trendItem">
            <p style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, fontSize: 14 }}>#Node.js</p>
          </div>
        </div>
        <div className="trends" style={{ backgroundColor: 'rgb(230, 236, 240)', }}>
          <div className="trendItem">
            <p style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, fontSize: 14 }}>#ReactNative</p>
          </div>
        </div>
        <div className="trends" style={{ backgroundColor: 'rgb(230, 236, 240)', }}>
          <div className="trendItem">
            <p style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, fontSize: 14 }}>#MongoDB</p>
          </div>
        </div>
        <div className="trends" style={{ backgroundColor: 'rgb(230, 236, 240)', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <div className="trendItem" style={{ borderRadius: 20 }}>
            <p style={{ fontWeight: 'normal', marginTop: 5, marginLeft: 15, fontSize: 14, color: 'rgba(29,161,242,1.00)' }}>Show More</p>
          </div>
        </div>

      </div>
    </div>
  );
}
