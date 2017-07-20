class SonglistsListingController {
  constructor($state, SongListsService, SongsService) {
    "ngInject";

    // This will keep the service instance across our class
    this.SongListsService = SongListsService;
    this.SongsService = SongsService;

    // this will gold our songlistList, it will be passed to the other components.
    this.songlistList = [];

    this.currentUrl = $state.current.url;

  }

  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
  $onInit() {
    var me = this;
    if (this.currentUrl.indexOf('songlists') != -1) {
      this.SongListsService.getSongLists().then(function (res) {
        me.songlistList = res;
      }, function (err) {
        console.log(err);
      });
    }
    else if (this.currentUrl.indexOf('songs') != -1) {
      this.SongsService.getSongs().then(function (res) {
        me.songlistList = res;
      }, function (err) {
        console.log(err);
      });
    }
    else {
      me.songlistList = [];
    }
  }
}

export default SonglistsListingController;
