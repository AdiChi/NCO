class SonglistsListingController {
  constructor(SongListsService) {
    "ngInject";

    // This will keep the service instance across our class
    this.SongListsService = SongListsService;

    // this will gold our songlistList, it will be passed to the other components.
    this.songlistList = [];
  }

  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
  $onInit() {
    var me = this;
    this.SongListsService.getSongLists().then(function(res) {
        me.songlistList = res;
    }, function(err) {
        console.log(err);
    });
  }
}

export default SonglistsListingController;
