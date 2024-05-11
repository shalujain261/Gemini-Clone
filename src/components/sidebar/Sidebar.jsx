import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'

export default function Sidebar() {

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompt, setRecentPrompt} = useContext(Context)

    const loadPrompt = async (prompt)=>{
        setRecentPrompt(prompt)
         await onSent(prompt)
    }
    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((items, index)=>{
                            return( 
                            <div onClick={loadPrompt(items)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{items.slice(0,18)} ...</p>
                            </div>
                            )

                        })}
                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-items recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>

                <div className="bottom-items recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>

                <div className="bottom-items recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>

        </div>
    )
}