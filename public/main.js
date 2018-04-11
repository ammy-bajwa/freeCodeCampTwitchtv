var allChannels = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'MedryBW', 'brunofin', 'comster404', 'quill18'];;
var onlineChannels = [];
var offlineChannels = [];
var api = `https://api.twitch.tv/kraken/streams/<channel ID>`

var getAllChannels = () => {
    var all = $('#allChannels')
    all.empty();

    allChannels.forEach((channel, i) => {
        $.getJSON(`https://api.twitch.tv/kraken/streams/${channel}?client_id=c8a3wkkb56yqjhlcui7tcfyjvs65dy6`,
            function (data) {
                var status = data.stream ? 'online' : 'offline';
                all.append(`<a href="https://www.twitch.tv/${allChannels[i]}" target="_blank"><p class="text-center"><b>${channel}</b> is <b>${status}</b></p><br /><hr /></a>`);
            });

    });

};

var showOnline = () => {
    var all = $('#allChannels');
    all.empty();
    allChannels.forEach((channel) => {
        $.getJSON(`https://api.twitch.tv/kraken/streams/${channel}?client_id=c8a3wkkb56yqjhlcui7tcfyjvs65dy6`,
            function (data) {
                var status = data.stream ? 'online' : 'offline';
                if (status == 'online') {
                    onlineChannels.push(channel)
                }
            });
    });
    onlineChannels.forEach((channel, i) => {
        all.append(`<a href="https://www.twitch.tv/${onlineChannels[i]}" target="_blank"><p class="text-center"><b>${channel}</b> is <b>Online</b></p><br /><hr /></a>`);
    });
    onlineChannels = [];
};
var showOffline = () => {
    var all = $('#allChannels');
    all.empty();
    allChannels.forEach((channel) => {
        $.getJSON(`https://api.twitch.tv/kraken/streams/${channel}?client_id=c8a3wkkb56yqjhlcui7tcfyjvs65dy6`, function (data) {
            // console.log(data);
            var status = data.stream ? 'online' : 'offline';
            if (status == 'offline') {
                offlineChannels.push(channel)
            }
        });
    });
    offlineChannels.forEach((channel, i) => {
        all.append(`<a href="https://www.twitch.tv/${offlineChannels[i]}" target="_blank"><p class="text-center"><b>${channel}</b> is <b>Offline</b></p><br /><hr /></a>`);
    });
    offlineChannels = [];
};
