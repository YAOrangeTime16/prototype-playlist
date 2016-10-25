/**
 * Här får du skapa dina låtar samt din playlist samt lägga till låtarna i playlisten.
 * Använd constructorn för Playlist samt Song för att skapa en playlist och låtar, sedan lägg till
 * låtarna med prototypmetoden "add" som du skapat.
 */

var myPlaylist = new Playlist();

var mysong1 = new Song("It\'s my life","Bon Jovi");
var mysong2 = new Song("Perfect", "Lady G.");
var mysong3 = new Song("Maybe You", "Bob D.");



myPlaylist.add(mysong1);
myPlaylist.add(mysong2);
myPlaylist.add(mysong3);