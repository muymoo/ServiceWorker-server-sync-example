# Download and Go

Videos are uploaded to the web server, cache is built to receive them and user has permitted the web app to use more space. User consumes video whether offline or online

## Description
Using a web browser, a user downloads a series of videos onto a tablet, intending to use them to entertain the kids on a road trip.

## Requirements
### Download
* A method of referencing video sources for download, e.g. using anchor elements with the download attribute.

### Content protection
* Ability to store video content in a protected format, as applicable.
* Ability to view previously stored protected video content, e.g. via the HTML5 Encrypted Media Extensions
* Ability to transfer media in a single operation (not copy-then-delete)
* Ability to account & verify the number of coexisting instances of the media

### Storage
An adequately-sized storage medium; at least enough to store several full movies, e.g. 32GB
* A method of accessing the storage medium to save videos, e.g.
* For local filesystem storage, the File Writer API
* For browser-internal storage, the IndexedDB API
* A method of specifying the validity duration of the content in offline storage
* A method of clearing the content in offline storage when its validity period has expired

### Playback
* A method of accessing the storage medium for video playback, e.g.
** The File API
** IndexedDB API
* Ability to view previously stored video content, e.g. via
** The HTML5 video element using a reference to a locally-stored file, provided through the File API
** The HTML5 video element using a reference to a video stored in browser-internal storage, and accessed via the IndexedDB API
* Ability to view previously stored protected video content, e.g. via the HTML5 Encrypted Media Extensions

### Note
Use Case taken from: [http://www.w3.org/2011/webtv/wiki/Download#Download_and_Go](http://www.w3.org/2011/webtv/wiki/Download#Download_and_Go)
