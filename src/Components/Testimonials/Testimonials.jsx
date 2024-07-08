import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"

const Testimonials = () => {
  const slider = useRef()
      let tx =0;
    const slideForword= ()=>{
      if (tx< 0){
        tx+=25;
      }
      slider.current.style.transform =`translatex(${tx}%)`
      
    }
    const slideBackword= ()=>{
      if (tx>-50){
        tx-=25;
      }
      slider.current.style.transform =`translatex(${tx}%)`

    }

  return (
    <div className='testimonials'>
         <img src={next_icon}className = 'next-btn' onClick={slideForword}/>
         <img src={back_icon} className = 'back-btn' onClick={slideBackword}/>
         <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1}  alt="user-img" />
                  <div>
                    <h3>William jackson</h3>
                    <span>Shady's univ. Egypt</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user2} className="user-img" alt="user-img" />
                  <div>
                    <h3>William jackson</h3>
                    <span>Shady's univ. Egypt</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user3} className="user-img" alt="user-img" />
                  <div>
                    <h3>William jackson</h3>
                    <span>Shady's univ. Egypt</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user4} className="user-img" alt="user-img" />
                  <div>
                    <h3>William jackson</h3>
                    <span>Shady's univ. Egypt</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
          </ul>
         </div>
    </div>
  )
}

export default Testimonials