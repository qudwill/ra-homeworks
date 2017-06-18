'use strict';

function MessageHistory({ list }) {
  if (list.length > 0) {
    let messageList = [];

    const messages = list.map(item => {
      const MessageType = 
        (item.type === 'response') ? Response :
        (item.type === 'message') ? Message :
        (item.type === 'typing') ? Typing :
        null;

      if (MessageType !== null) {
        messageList.push(<MessageType key={item.id} from={item.from} message={item} />);
      }
    });

    return (
      <ul>
        { messageList }
      </ul>
    );
  } else {
    return null;
  }
}