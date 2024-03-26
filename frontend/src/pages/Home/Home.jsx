import { useState } from 'react';
import './home.css'

export default function Home() {
    const [date, setDate] = useState(new Date());

    const getDateString = () => {
        return date.toString().split(":")[0]
    }

  return (
    <div className="homeMainContainer">
        <div className="homePanelContainer">
            <div className='dateContainer'>
                <h3>{getDateString()}</h3>
            </div>
            <div className='homePanelContentContainer'>
                <div className='contentPanel'></div>
                <div className='contentPanel'></div>
                <div className='contentPanel'></div>
                <div className='contentPanel'></div>
            </div>
        </div>
    </div>
  )
}
