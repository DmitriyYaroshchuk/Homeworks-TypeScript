class EventManager {
    static handlers = {};

    static on (eventName, eventHandler) {
        if (Array.isArray(this.handlers[eventName])) {
            this.handlers[eventName].push(eventHandler);
        } else {
            this.handlers[eventName] = [eventHandler];
        }
    }

    static off (eventName, eventHandler) {
        if (!this.handlers[eventName]) return;

        const index = this.handlers[eventName].findIndex((exsHandler) => {
            return exsHandler === eventHandler;
        });

        if (index !== -1) {
            this.handlers[eventName].splice(index, 1);
        }
    }

    static trigger (eventName) {
        if (!this.handlers[eventName]) return;
        this.handlers[eventName].forEach((handler) => {
            handler(eventName, this);
        })
    }
}

const handleClick1 = (name, event) => {
    console.log('click1', name, event);
}
const handleClick2 = (name, event) => {
    console.log('click2', name, event);
}
const handleClick3 = (name, event) => {
    console.log('click3', name, event);
}

EventManager.on('click', handleClick1);
EventManager.on('click', handleClick2);
EventManager.on('click', handleClick3);
EventManager.trigger('click');
console.log(EventManager.handlers);

console.log('-------------------');

EventManager.off('click', handleClick3);
EventManager.trigger('click');
console.log(EventManager.handlers);