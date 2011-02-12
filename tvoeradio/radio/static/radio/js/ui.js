register_namespace('ui');

ui.go_to_page = function(name) {
    $('.page').hide(300);
    $('#page_'+name).show(300);
    $('.popup').hide(300);
}

ui.resz = function() {
    var ww = $(window).width();
    var wh = $(window).height()
    $('#trackinfo_panel').height(wh-$('#controls').height());
    $('#slider_seek').width(ww-430);
}

ui.show_loader_fullscreen = function() {
    $('#loader_fullscreen').show();
}

ui.hide_loader_fullscreen = function() {
    $('#loader_fullscreen').hide();
}

ui.update_track_info = function() {
    $('#track_artist').text(player.playlist.get_current_track().artist);
    $('#track_name').text(player.playlist.get_current_track().title);
    ui.infoblock.show($('#trackinfo_panel'), 'artist', player.playlist.get_current_track().artist);
}

ui.update_station_info = function() {
    $('#station_name').html(player.station.get_current_html());
}

ui.update_topnav = function() {
    var links_left = [];
    links_left.push('<span class="pseudolink">Last.fm</span>')
    $('#topnav').html(links_left.join(' | '));
}
