'use strict';

function MessageHistory({ list }) {
  if (list.length > 0) {
    const components = {
      response: Response,
      message: Message,
      typing: Typing
    };

    const messages = list.map(item => {
      const Component = components[item.type];
      
      return <Component key={item.id} from={item.from} message={item} />;
    });

    return (
      <ul>
        { messages }
      </ul>
    );
  } else {
    return null;
  }
}