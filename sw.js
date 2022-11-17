self.addEventListener('push', function(event) {

    var title = 'La Banque des Territoires';
    var body = event.data.text();
    var icon = 'https://www.banquedesterritoires.fr/sites/default/files/favicons/favicon-32x32.png';
    var tag = 'news-notification-tag';

    var actions = [
        { action: 'explore', title: "Voir l'actualité", icon: '' },
        { action: 'close', title: "Fermer", icon: '' },
    ];

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag,
            actions: actions
        })
    );
});

self.addEventListener('notificationclick', (event) => {
    switch (event.action) {
        case 'close':
            event.notification.close();
            break;
        default:
            console.log(`Unknown action clicked: '${event.action}'`);
            break;
    }
});
