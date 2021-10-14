import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
const ChatFeed = (props) => {
    const {chats, ActiveChat, userName, messages } = props;

    const chat = chats && chats[ActiveChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map(key, index) => {
            const message = messages[key];
            const lastMessageKey = index ===0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username;

            return (
                <div key = {`msg_${index}`} style={{width:'100%'}}>
<div className='message-block'>
{
    isMyMessage 
    ? <MyMessage />
}
</div>
                </div>
            )
        }
    }
    return (
        <div>
            ChatFeed
        </div>
    )
}
export default ChatFeed