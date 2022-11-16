self.addEventListener('push', function(event) {
    var event_obj = event;
    
    console.log('Received a push message', event_obj.data.text);

    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = '/images/icon-192x192.png';
    var tag = 'simple-push-demo-notification-tag';
    var data = {
        doge: {
            wow: 'such amaze notification data'
        }
    };

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag,
            data: data
        })
    );
});
