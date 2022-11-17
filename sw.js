self.addEventListener('push', function(event) {

    var title = 'La Banque des Territoires';
    var body = "Une nouvelle actualité vient d'être publiée";
    var icon = 'https://www.banquedesterritoires.fr/sites/default/files/favicons/favicon-32x32.png';
    var tag = 'simple-push-demo-notification-tag';
    var data = {
        doge: {
            wow: 'such amaze notification data'
        }
    };
    var actions = [
        { action: 'explore', title: "Voir l'actualité", icon: '' },
        { action: 'close', title: "Fermer", icon: '' },
    ];

    if (Notification.permission === "granted") {
        const notificationText = event.data.text();
        const showNotification = self.registration.showNotification('La Banque des Territoires', {
            body: notificationText,
            icon: 'https://www.banquedesterritoires.fr/sites/default/files/favicons/favicon-32x32.png'
        });
        // Make sure the toast notification is displayed.
        event.waitUntil(showNotification);
    }
    /*
        event.waitUntil(
            self.registration.showNotification(title, {
                body: body,
                icon: icon,
                tag: tag,
                data: data,
                actions: actions
            })
        );
        */
});
