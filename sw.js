self.addEventListener('push', function(event) {
    if (event.data) {
    console.log('Push event!! ', event.data.text())
  } else {
    console.log('Push event but no data')
  }

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
        { action: 'explore', title: "Voir l'actualité", icon: ''},
        { action: 'close', title: "Fermer", icon: ''},
        ];

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag,
            data: data,
            actions: actions
        })
    );
});
