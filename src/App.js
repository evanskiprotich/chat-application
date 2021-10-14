import { ChatEngine } from 'react-chat-engine';

import './App.css'
import ChatFeed from './components/ChatFeed';
const App = () => {
    return (
        <ChatEngine
        height ="100vh"
        projectID ="a09fe0dc-f69c-4cfa-ae16-b4f043f91e3d"
        userName = "Evans"
        userSecret = "123123"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;